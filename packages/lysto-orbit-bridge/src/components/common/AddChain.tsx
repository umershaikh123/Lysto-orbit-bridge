import React from 'react'
import {
  addBaseSepoliaChain,
  addSepoliaChain,
  addLystoChain
} from '../../util/metamask'
import { sepolia } from '../../util/wagmi/wagmiAdditionalNetworks'
import { Button as MuiButton } from '@mui/material'
import { useNetworks } from '../../hooks/useNetworks'
import { useNetworksRelationship } from '../../hooks/useNetworksRelationship'
import { isNetwork } from '../../util/networks'
import MetamaskLogo from '@/icons/MetamaskLogo.svg'
import Image from 'next/image'
export const AddChainButton = () => {
  const [networks] = useNetworks()
  const { parentChain, childChain } = useNetworksRelationship(networks)

  const {
    isArbitrum: isConnectedToArbitrum,
    isOrbitChain: isConnectedToOrbitChain
  } = isNetwork(networks.sourceChain.id)
  const isParentChainEthereum = isNetwork(
    parentChain.id
  ).isEthereumMainnetOrTestnet

  return (
    <div>
      {(isParentChainEthereum && isConnectedToArbitrum) ||
      isConnectedToOrbitChain ? (
        <ChainButton
          title="add testnet Sepolia chain to your metamask"
          name="Sepolia"
          addChainMethod={addSepoliaChain}
        />
      ) : (
        <ChainButton
          title="add testnet Lysto chain to your metamask"
          name="Lysto"
          addChainMethod={addLystoChain}
        />
      )}
    </div>
  )
}

export interface chainButtonProps {
  addChainMethod: () => Promise<void>
  title: string
  name: string
  color?: string
  css?: string
}

export const ChainButton = ({
  addChainMethod,
  title,
  name,
  color = '#1377BB',
  css
}: chainButtonProps) => {
  return (
    <div>
      <MuiButton
        className={`rounded-lg  border-2 text-sm  font-medium hover:border-2 ${css}`}
        onClick={addChainMethod}
        variant="outlined"
        sx={{ color: color }}
        title={`${title}`}
      >
        <Image
          src={MetamaskLogo}
          width={25}
          height={25}
          alt="metamask logo"
          className="mr-2"
        />
        Add {name}
      </MuiButton>
    </div>
  )
}
