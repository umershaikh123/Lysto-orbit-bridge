import { ChainId, getCustomChainFromLocalStorageById } from './networks'
import { orbitChains, BridgeUiConfig } from './orbitChainsList'

export function getBridgeUiConfigForChain(chainId: number): BridgeUiConfig {
  type BaseBridgeUiConfig = Omit<BridgeUiConfig, 'network'> & {
    network: Omit<BridgeUiConfig['network'], 'name'>
  }

  const ethereumBaseConfig: BaseBridgeUiConfig = {
    color: '#454A75',
    network: {
      logo: '/images/EthereumLogo.svg'
    }
  }

  const arbitrumBaseConfig: BaseBridgeUiConfig = {
    color: '#1B4ADD',
    network: {
      logo: '/images/ArbitrumLogo.svg'
    }
  }

  const customChain = getCustomChainFromLocalStorageById(chainId)

  switch (chainId) {
    case ChainId.Ethereum:
      return {
        ...ethereumBaseConfig,
        network: {
          ...ethereumBaseConfig.network,
          name: 'Ethereum',
          description: 'The OG chain that started it all.'
        }
      }
    case ChainId.Sepolia:
      return {
        color: '#00233C',
        network: {
          ...ethereumBaseConfig.network,
          name: 'Sepolia',
          description: 'The current recommended Ethereum testnet.'
        }
      }
    case ChainId.Holesky:
      return {
        color: '#00233C',
        network: {
          ...ethereumBaseConfig.network,
          name: 'Holesky',
          description: 'Ethereum testnet.'
        }
      }

    case ChainId.baseSepolia:
      return {
        color: '#0f126c',
        network: {
          logo: '/images/baseLogo2.png',
          name: 'Base Sepolia',
          description: 'Base testnet'
        }
      }
    case ChainId.Local:
      return {
        ...ethereumBaseConfig,
        network: {
          ...ethereumBaseConfig.network,
          name: 'Ethereum Local'
        }
      }
    case ChainId.ArbitrumOne:
      return {
        ...arbitrumBaseConfig,
        network: {
          ...arbitrumBaseConfig.network,
          name: 'Arbitrum One',
          logo: '/images/ArbitrumOneLogo.svg',
          description:
            'Rollup protocol. The original Arbitrum chain. Secured by functional fraud proofs.'
        }
      }
    case ChainId.ArbitrumSepolia:
      return {
        ...arbitrumBaseConfig,
        network: {
          ...arbitrumBaseConfig.network,
          name: 'Arbitrum Sepolia',
          description: 'The current recommended Arbitrum testnet.'
        }
      }
    case ChainId.ArbitrumLocal:
      return {
        ...arbitrumBaseConfig,
        network: {
          ...arbitrumBaseConfig.network,
          name: 'Arbitrum Local'
        }
      }
    case ChainId.ArbitrumNova:
      return {
        color: '#E57310',
        network: {
          name: 'Arbitrum Nova',
          logo: '/images/ArbitrumNovaLogo.svg',
          description:
            'AnyTrust protocol. Low fees for high-volume transactions. Secured by a trust-minimized Data Availability Committee (DAC).'
        }
      }
    case ChainId.StylusTestnet:
      return {
        color: '#E3066E',
        network: {
          name: 'Stylus Testnet',
          logo: '/images/StylusLogo.svg',
          description:
            'An experimental playground for Arbitrum Stylus smart contracts.'
        }
      }

    case ChainId.Complare:
      return {
        color: '#000000',
        network: {
          name: 'Complere Chain',
          logo: '/images/ArbitrumLogo.svg',
          description: 'Complare Chain which is the child of a base chain'
        }
      }

    case ChainId.Lysto:
      return {
        color: '#000000',
        network: {
          name: 'Lysto Anytrust Chain',
          logo: '/images/ArbitrumLogo.svg',
          description: 'Lysto Chain which is the child of a base chain'
        }
      }

    default: {
      // added Orbit chains
      const orbitChain = orbitChains[chainId]

      if (orbitChain) {
        return orbitChain.bridgeUiConfig
      }

      return {
        color: '#12AAFF',
        network: {
          name: customChain ? customChain.name : 'Unknown',
          logo: '/images/OrbitLogo.svg'
        }
      }
    }
  }
}
