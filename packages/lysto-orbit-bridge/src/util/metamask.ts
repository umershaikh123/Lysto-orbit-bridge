import { rpcURLs as rpc } from './networks'
import { explorerUrls } from './networks'
import { ChainId } from './networks'
export async function addNexusChain() {
  try {
    if (typeof window.ethereum !== 'undefined') {
      const result = await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0xCB6BAA',
            rpcUrls: [
              `${process.env.NEXT_PUBLIC_NEXUS_ORBIT_RPC_URL || 'null rpc'}`
            ],
            chainName: 'Nexus Orbit Chain',
            nativeCurrency: {
              name: 'ETHER',
              symbol: 'ETH',
              decimals: 18
            },
            blockExplorerUrls: [
              `${
                process.env.NEXT_PUBLIC_NEXUS_ORBIT_EXPLORER_URL ||
                'null Explorer url'
              }`
            ]
          }
        ]
      })
      console.log('Metamask is installed')
    } else {
      console.log('Metamask is not installed')
    }
  } catch (error) {
    console.log(error)
  }
}

export async function addLystoChain() {
  try {
    if (typeof window.ethereum !== 'undefined') {
      const result = await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x3434AAED2',
            rpcUrls: [`${process.env.NEXT_PUBLIC_L3_RPC}`],
            chainName: 'lysto-anytrust',
            nativeCurrency: {
              name: 'ETHER',
              symbol: 'ETH',
              decimals: 18
            },
            blockExplorerUrls: [`${process.env.NEXT_PUBLIC_L3_EXPLORER}`]
          }
        ]
      })
      console.log('Metamask is installed')
    } else {
      console.log('Metamask is not installed')
    }
  } catch (error) {
    console.log(error)
  }
}

export async function addHoleskyChain() {
  try {
    if (typeof window.ethereum !== 'undefined') {
      const result = await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x4268',
            rpcUrls: [`https://ethereum-holesky-rpc.publicnode.com`],
            chainName: 'holesky',
            nativeCurrency: {
              name: 'ETHER',
              symbol: 'ETH',
              decimals: 18
            },
            blockExplorerUrls: [`https://holesky.etherscan.io/`]
          }
        ]
      })
      console.log('Metamask is installed')
    } else {
      console.log('Metamask is not installed')
    }
  } catch (error) {
    console.log(error)
  }
}

export async function addBaseSepoliaChain() {
  try {
    if (typeof window.ethereum !== 'undefined') {
      const result = await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x14A34',
            rpcUrls: [`${process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL}`],
            chainName: 'Base Sepolia Testnet',
            nativeCurrency: {
              name: 'Sepolia Ether',
              symbol: 'ETH',
              decimals: 18
            },
            blockExplorerUrls: [
              `${process.env.NEXT_PUBLIC_BASE_SEPOLIA_EXPLORER}`
            ]
          }
        ]
      })
      console.log('Metamask is installed')
    } else {
      console.log('Metamask is not installed')
    }
  } catch (error) {
    console.log(error)
  }
}

export async function addSepoliaChain() {
  try {
    if (typeof window.ethereum !== 'undefined') {
      const result = await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0xAA36A7',
            rpcUrls: [`${[rpc[ChainId.Lysto]!]}`],
            chainName: 'sepolia',
            nativeCurrency: {
              name: 'Sepolia Ether',
              symbol: 'ETH',
              decimals: 18
            },
            blockExplorerUrls: [`${explorerUrls[ChainId.Lysto]!}`]
          }
        ]
      })
      console.log('Metamask is installed')
    } else {
      console.log('Metamask is not installed')
    }
  } catch (error) {
    console.log(error)
  }
}
