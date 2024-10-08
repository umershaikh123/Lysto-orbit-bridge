import { createClient, configureChains } from 'wagmi'
import { mainnet, arbitrum } from '@wagmi/core/chains'
import { publicProvider } from 'wagmi/providers/public'
import { connectorsForWallets, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { trustWallet } from '@rainbow-me/rainbowkit/wallets'

import {
  sepolia,
  arbitrumNova,
  arbitrumSepolia,
  stylusTestnet,
  localL1Network as local,
  localL2Network as arbitrumLocal,
  nexusOrbit,
  Lysto,
  holesky,
  complare,
  baseSepolia
} from './wagmiAdditionalNetworks'
import { isTestingEnvironment } from '../CommonUtils'
import { getCustomChainsFromLocalStorage, ChainId } from '../networks'
import { getOrbitChains } from '../orbitChainsList'
import { getWagmiChain } from './getWagmiChain'
import { customInfuraProvider } from '../infura'

const customChains = getCustomChainsFromLocalStorage().map(chain =>
  getWagmiChain(chain.chainID)
)
const wagmiOrbitChains = getOrbitChains().map(chain =>
  getWagmiChain(chain.chainID)
)

const chainList = isTestingEnvironment
  ? [
      baseSepolia,
      holesky,
      // mainnet, arb1, & arb nova are for network switch tests
      mainnet,
      arbitrum,
      arbitrumNova,
      // sepolia & arb sepolia are for tx history panel tests
      sepolia,
      arbitrumSepolia,

      // Orbit chains
      stylusTestnet,
      ...wagmiOrbitChains,
      // add local environments during testing
      local,
      arbitrumLocal,
      // nexusOrbit,
      Lysto,
      // user-added custom chains
      ...customChains
    ]
  : [
      baseSepolia,
      Lysto,
      mainnet,
      arbitrum,
      holesky,
      arbitrumNova,
      sepolia,
      arbitrumSepolia,
      stylusTestnet,
      ...wagmiOrbitChains,
      ...customChains
    ]

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!

if (!projectId) {
  console.error('NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID variable missing.')
}

const appInfo = {
  appName: 'Bridge to Arbitrum',
  projectId
}

enum TargetChainKey {
  Ethereum = 'mainnet',
  ArbitrumOne = 'arbitrum-one',
  ArbitrumNova = 'arbitrum-nova',
  Sepolia = 'sepolia',
  ArbitrumSepolia = 'arbitrum-sepolia',
  Nexus_Orbit = 'nexus-orbit',
  Holesky = 'holesky',
  baseSepolia = 'base-sepolia',
  Complare = 'complere-chain',
  Lysto = 'lysto'
}

function sanitizeTargetChainKey(targetChainKey: string | null): TargetChainKey {
  // Default to  baseSepolia if nothing passed in
  if (targetChainKey === null) {
    return TargetChainKey.baseSepolia
  }

  // Default to  baseSepolia if invalid
  if (!(Object.values(TargetChainKey) as string[]).includes(targetChainKey)) {
    return TargetChainKey.baseSepolia
  }

  return targetChainKey as TargetChainKey
}

function getChainId(targetChainKey: TargetChainKey): number {
  switch (targetChainKey) {
    case TargetChainKey.Ethereum:
      return ChainId.Ethereum

    case TargetChainKey.ArbitrumOne:
      return ChainId.ArbitrumOne

    case TargetChainKey.ArbitrumNova:
      return ChainId.ArbitrumNova

    case TargetChainKey.Sepolia:
      return ChainId.Sepolia

    case TargetChainKey.ArbitrumSepolia:
      return ChainId.ArbitrumSepolia

    case TargetChainKey.Nexus_Orbit:
      return ChainId.NexusOrbit

    case TargetChainKey.baseSepolia:
      return ChainId.baseSepolia

    case TargetChainKey.Holesky:
      return ChainId.Holesky
    case TargetChainKey.Complare:
      return ChainId.Complare
    case TargetChainKey.Lysto:
      return ChainId.Lysto

    default:
      return 0
  }
}

function getChains(targetChainKey: TargetChainKey) {
  const targetChainId = getChainId(targetChainKey)

  // Doing `Array.filter` instead of `Array.find` in case it's empty, just in case.
  const target = chainList.filter(chain => chain.id === targetChainId)
  const others = chainList.filter(chain => chain.id !== targetChainId)

  return [...target, ...others]
}

export function getProps(targetChainKey: string | null) {
  const { chains, provider } = configureChains(
    // Wagmi selects the first chain as the one to target in WalletConnect, so it has to be the first in the array.
    //
    // https://github.com/wagmi-dev/references/blob/main/packages/connectors/src/walletConnect.ts#L114
    getChains(sanitizeTargetChainKey(targetChainKey)),
    [customInfuraProvider(), publicProvider()]
  )

  const { wallets } = getDefaultWallets({
    ...appInfo,
    chains
  })

  const connectors = connectorsForWallets([
    ...wallets,
    {
      groupName: 'More',
      wallets: [trustWallet({ chains, projectId })]
    }
  ])

  const client = createClient({
    autoConnect: true,
    connectors,
    provider
  })

  return {
    rainbowKitProviderProps: {
      appInfo,
      chains
    },
    wagmiConfigProps: {
      client
    }
  }
}
