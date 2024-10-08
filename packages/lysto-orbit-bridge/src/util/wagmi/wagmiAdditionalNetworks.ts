import { Chain, sepolia as sepoliaDefault } from 'wagmi'

import { ether } from '../../constants'
import { ChainId, ChainWithRpcUrl, explorerUrls, rpcURLs } from '../networks'
import { getBridgeUiConfigForChain } from '../bridgeUiConfig'

export function chainToWagmiChain(chain: ChainWithRpcUrl): Chain {
  const { nativeTokenData } = getBridgeUiConfigForChain(chain.chainID)

  return {
    id: chain.chainID,
    name: chain.name,
    network: chain.name.toLowerCase().split(' ').join('-'),
    nativeCurrency: nativeTokenData ?? ether,
    rpcUrls: {
      default: {
        http: [chain.rpcUrl]
      },
      public: {
        http: [chain.rpcUrl]
      }
    },
    blockExplorers: {
      default: {
        name: 'Block Explorer',
        url: chain.explorerUrl
      }
    }
  }
}

export const sepolia: Chain = {
  ...sepoliaDefault,
  rpcUrls: {
    ...sepoliaDefault.rpcUrls,
    // override the default public RPC with the Infura RPC
    // public RPCs are getting rate limited
    default: {
      http: [rpcURLs[ChainId.Sepolia]!]
    }
  }
}

export const holesky: Chain = {
  id: ChainId.Holesky,
  name: 'holesky',
  network: 'holesky',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.Holesky]!]
    },
    public: {
      http: [rpcURLs[ChainId.Holesky]!]
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: explorerUrls[ChainId.Holesky]!
    },
    default: { name: 'Etherscan', url: explorerUrls[ChainId.Holesky]! }
  }
}

export const Lysto: Chain = {
  id: ChainId.Lysto,
  name: 'lysto',
  network: 'lysto-anytrust',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.Lysto]!]
    },
    public: {
      http: [rpcURLs[ChainId.Lysto]!]
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: explorerUrls[ChainId.Lysto]!
    },
    default: { name: 'blockscout', url: explorerUrls[ChainId.Lysto]! }
  }
}

export const arbitrumSepolia: Chain = {
  id: ChainId.ArbitrumSepolia,
  name: 'Arbitrum Sepolia',
  network: 'arbitrum-sepolia',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.ArbitrumSepolia]!]
    },
    public: {
      http: [rpcURLs[ChainId.ArbitrumSepolia]!]
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'Arbiscan',
      url: explorerUrls[ChainId.ArbitrumSepolia]!
    },
    default: { name: 'Arbiscan', url: explorerUrls[ChainId.ArbitrumSepolia]! }
  }
}

export const arbitrumNova: Chain = {
  id: ChainId.ArbitrumNova,
  name: 'Arbitrum Nova',
  network: 'arbitrum-nova',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.ArbitrumNova]!]
    },
    public: {
      http: [rpcURLs[ChainId.ArbitrumNova]!]
    }
  },
  blockExplorers: {
    etherscan: { name: 'Arbiscan', url: 'https://nova.arbiscan.io' },
    default: { name: 'Arbiscan', url: 'https://nova.arbiscan.io' }
  }
}

export const nexusOrbit: Chain = {
  id: ChainId.NexusOrbit,
  network: 'nexus-orbit-chain',
  name: 'Nexus Orbit Chain',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.NexusOrbit]!]
    },
    public: {
      http: [rpcURLs[ChainId.NexusOrbit]!]
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'NexusOrbScan',
      url: `${
        process.env.NEXT_PUBLIC_NEXUS_ORBIT_EXPLORER_URL || 'null Explorer url'
      }`
    },
    blockscount: {
      name: 'NexusOrbScan',
      url: `${
        process.env.NEXT_PUBLIC_NEXUS_ORBIT_EXPLORER_URL || 'null Explorer url'
      }`
    },
    default: {
      name: 'NexusOrbScan',
      url: `${
        process.env.NEXT_PUBLIC_NEXUS_ORBIT_EXPLORER_URL || 'null Explorer url'
      }`
    }
  }
}

export const baseSepolia: Chain = {
  id: ChainId.baseSepolia,
  name: 'Base Sepolia',
  network: 'Base Sepolia',
  nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.baseSepolia]!]
    },
    public: {
      http: [rpcURLs[ChainId.baseSepolia]!]
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: explorerUrls[ChainId.baseSepolia]!
    },
    default: { name: 'blockScout', url: explorerUrls[ChainId.baseSepolia]! }
  }
}

export const complare: Chain = {
  id: ChainId.Complare,
  name: 'complere-chain',
  network: 'complere-chain',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.Complare]!]
    },
    public: {
      http: [rpcURLs[ChainId.Complare]!]
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: explorerUrls[ChainId.Complare]!
    },
    default: { name: 'blockScout', url: explorerUrls[ChainId.Complare]! }
  }
}

export const stylusTestnet: Chain = {
  id: ChainId.StylusTestnet,
  name: 'Stylus Testnet',
  network: 'stylus-testnet',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.StylusTestnet]!]
    },
    public: {
      http: [rpcURLs[ChainId.StylusTestnet]!]
    }
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://stylus-testnet-explorer.arbitrum.io'
    }
  }
}

/**
 * For e2e testing
 */
export const localL1Network: Chain = {
  id: ChainId.Local,
  name: 'Ethereum Local',
  network: 'custom-localhost',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.Local]!]
    },
    public: {
      http: [rpcURLs[ChainId.Local]!]
    }
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: '' }
  }
}

/**
 * For e2e testing
 */
export const localL2Network: Chain = {
  id: ChainId.ArbitrumLocal,
  name: 'Arbitrum Local',
  network: 'arbitrum-localhost',
  nativeCurrency: ether,
  rpcUrls: {
    default: {
      http: [rpcURLs[ChainId.ArbitrumLocal]!]
    },
    public: {
      http: [rpcURLs[ChainId.ArbitrumLocal]!]
    }
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: '' }
  }
}
