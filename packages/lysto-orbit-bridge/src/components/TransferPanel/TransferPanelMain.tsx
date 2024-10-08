import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowsUpDownIcon, ArrowDownIcon } from '@heroicons/react/24/outline'
import { twMerge } from 'tailwind-merge'
import { BigNumber, constants, utils } from 'ethers'
import { Chain, useAccount } from 'wagmi'
import { useMedia } from 'react-use'

import { Loader } from '../common/atoms/Loader'
import { useActions, useAppState } from '../../state'
import { formatAmount } from '../../util/NumberUtils'
import {
  ChainId,
  getExplorerUrl,
  getNetworkName,
  getDestinationChainIds,
  isNetwork
} from '../../util/networks'
import { getWagmiChain } from '../../util/wagmi/getWagmiChain'
import { useDestinationAddressStore } from './AdvancedSettings'
import { ExternalLink } from '../common/ExternalLink'
import { useDialog } from '../common/Dialog'
import {
  AmountQueryParamEnum,
  useArbQueryParams
} from '../../hooks/useArbQueryParams'

import { TransferPanelMainInput } from './TransferPanelMainInput'
import { useBalance } from '../../hooks/useBalance'
import { ERC20BridgeToken } from '../../hooks/arbTokenBridge.types'
import { useAccountType } from '../../hooks/useAccountType'
import { CommonAddress } from '../../util/CommonAddressUtils'
import {
  isTokenArbitrumSepoliaNativeUSDC,
  isTokenArbitrumOneNativeUSDC,
  isTokenSepoliaUSDC,
  isTokenMainnetUSDC,
  sanitizeTokenSymbol
} from '../../util/TokenUtils'
import {
  LYSTO_DISCORD,
  ETH_BALANCE_ARTICLE_LINK,
  USDC_LEARN_MORE_LINK,
  ether
} from '../../constants'
import { NetworkListbox, NetworkListboxProps } from './NetworkListbox'
import { OneNovaTransferDialog } from './OneNovaTransferDialog'
import { useUpdateUSDCBalances } from '../../hooks/CCTP/useUpdateUSDCBalances'
import {
  useNativeCurrency,
  NativeCurrencyErc20
} from '../../hooks/useNativeCurrency'
import { defaultErc20Decimals } from '../../defaults'
import { EstimatedGas } from './EstimatedGas'
import { TransferReadinessRichErrorMessage } from './useTransferReadinessUtils'
import { NetworkSelectionContainer } from '../common/NetworkSelectionContainer'
import { TokenSymbolWithExplorerLink } from '../common/TokenSymbolWithExplorerLink'
import { useNetworks } from '../../hooks/useNetworks'
import { useNetworksRelationship } from '../../hooks/useNetworksRelationship'
import {
  TransferDisabledDialog,
  useTransferDisabledDialogStore
} from './TransferDisabledDialog'
import { getBridgeUiConfigForChain } from '../../util/bridgeUiConfig'
import { useGasSummary } from '../../hooks/TransferPanel/useGasSummary'
import { useUpdateUSDCTokenData } from './TransferPanelMain/hooks'
import {
  Balances,
  useSelectedTokenBalances
} from '../../hooks/TransferPanel/useSelectedTokenBalances'

enum NetworkType {
  l1 = 'l1',
  l2 = 'l2'
}

export function SwitchNetworksButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { isSmartContractWallet, isLoading: isLoadingAccountType } =
    useAccountType()

  const disabled = isSmartContractWallet || isLoadingAccountType

  const [networks, setNetworks] = useNetworks()

  return (
    <div className="z-10 flex h-4 w-full items-center justify-center lg:h-1">
      <button
        type="button"
        disabled={disabled}
        className={twMerge(
          'group relative flex h-7 w-7 items-center justify-center rounded bg-gray-1 p-1',
          disabled && 'pointer-events-none'
        )}
        onClick={() => {
          setNetworks({
            sourceChainId: networks.destinationChain.id,
            destinationChainId: networks.sourceChain.id
          })
        }}
        aria-label="Switch Networks"
        {...props}
      >
        <SwitchNetworkButtonBorderTop />
        {isSmartContractWallet ? (
          <ArrowDownIcon className="h-6 w-6 stroke-1 text-white" />
        ) : (
          <ArrowsUpDownIcon className="h-8 w-8 stroke-1 text-white transition duration-300 group-hover:rotate-180 group-hover:opacity-80" />
        )}
        <SwitchNetworkButtonBorderBottom />
      </button>
    </div>
  )
}

function SwitchNetworkButtonBorderTop() {
  const [networks] = useNetworks()

  const sourceNetworkColor = getBridgeUiConfigForChain(
    networks.sourceChain.id
  ).color

  return (
    <div
      className="absolute left-0 right-0 top-0 m-auto h-[7.5px] w-full rounded-t border-x border-t transition-[border-color] duration-200 lg:h-[10px]"
      style={{ borderColor: sourceNetworkColor }}
    />
  )
}

function SwitchNetworkButtonBorderBottom() {
  const [networks] = useNetworks()

  const destinationNetworkColor = getBridgeUiConfigForChain(
    networks.destinationChain.id
  ).color

  return (
    <div
      className="absolute bottom-0 left-0 right-0 m-auto h-[7.5px] w-full rounded-b border-x border-b transition-[border-color] duration-200 lg:h-[10px]"
      style={{ borderColor: destinationNetworkColor }}
    />
  )
}

function CustomAddressBanner({
  network,
  customAddress
}: {
  network: Chain
  customAddress: string | undefined
}) {
  const { color } = getBridgeUiConfigForChain(network.id)

  if (!customAddress) {
    return null
  }

  return (
    <div
      style={{
        backgroundColor: `${color}AA`,
        color: 'white',
        borderColor: color
      }}
      className={twMerge(
        'w-full rounded-t border border-b-0 p-2 text-center text-sm'
      )}
    >
      <span>
        Showing balance for{' '}
        <ExternalLink
          className="arb-hover underline"
          href={`${getExplorerUrl(network.id)}/address/${customAddress}`}
        >
          {customAddress}
        </ExternalLink>
      </span>
    </div>
  )
}

function NetworkContainer({
  network,
  customAddress,
  bgLogoHeight = 58,
  children
}: {
  network: Chain
  customAddress?: string
  bgLogoHeight?: number
  children: React.ReactNode
}) {
  const { address } = useAccount()
  const {
    color,
    network: { logo: networkLogo }
  } = getBridgeUiConfigForChain(network.id)
  const isSmallScreen = useMedia('(max-width: 639px)')

  const backgroundImage = `url(${networkLogo})`

  const walletAddressLowercased = address?.toLowerCase()

  const showCustomAddressBanner = useMemo(() => {
    if (!customAddress || !walletAddressLowercased) {
      return false
    }
    if (customAddress === walletAddressLowercased) {
      return false
    }
    return utils.isAddress(customAddress)
  }, [customAddress, walletAddressLowercased])

  return (
    <div>
      {showCustomAddressBanner && (
        <CustomAddressBanner network={network} customAddress={customAddress} />
      )}
      <div
        style={{
          backgroundColor: `${color}66`, // 255*40% is 102, = 66 in hex
          borderColor: color
        }}
        className={twMerge(
          'relative rounded border transition-colors duration-400',
          showCustomAddressBanner && 'rounded-t-none'
        )}
      >
        <div
          className="absolute left-0 top-0 h-full w-full bg-[-2px_0] bg-no-repeat bg-origin-content p-3 opacity-50"
          style={{
            // backgroundImage,
            backgroundSize: `auto ${bgLogoHeight + (isSmallScreen ? -12 : 0)}px`
          }}
        />
        <div className="relative space-y-3.5 bg-contain bg-no-repeat p-3 sm:flex-row">
          {children}
        </div>
      </div>
    </div>
  )
}

function StyledLoader() {
  return <Loader color="white" size="small" />
}

function ETHBalance({
  balance,
  prefix = ''
}: {
  balance: BigNumber | null
  prefix?: string
}) {
  if (!balance) {
    return <StyledLoader />
  }

  return (
    <p>
      <span className="font-light">{prefix}</span>
      <span>{formatAmount(balance, { symbol: ether.symbol })}</span>
    </p>
  )
}

function TokenBalance({
  forToken,
  balance,
  on,
  prefix = '',
  tokenSymbolOverride
}: {
  forToken: ERC20BridgeToken | NativeCurrencyErc20 | null
  balance: BigNumber | null
  on: NetworkType
  prefix?: string
  tokenSymbolOverride?: string
}) {
  const isParentChain = on === NetworkType.l1

  if (!forToken) {
    return null
  }

  if (!balance) {
    return <StyledLoader />
  }

  const tokenSymbol = tokenSymbolOverride ?? forToken.symbol

  return (
    <p>
      <span className="font-light">{prefix}</span>
      <span aria-label={`${tokenSymbol} balance amount on ${on}`}>
        {formatAmount(balance, {
          decimals: forToken.decimals
        })}
      </span>{' '}
      <TokenSymbolWithExplorerLink
        token={forToken}
        tokenSymbolOverride={tokenSymbolOverride}
        isParentChain={isParentChain}
      />
    </p>
  )
}

function BalancesContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:text-md flex flex-col flex-nowrap items-end break-all text-sm tracking-[.25px] text-white">
      {children}
    </div>
  )
}

function NetworkListboxPlusBalancesContainer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between gap-1 gap-y-2.5 whitespace-nowrap ">
      {children}
    </div>
  )
}

export function TransferPanelMain({
  amount,
  setAmount,
  errorMessage
}: {
  amount: string
  setAmount: (value: string) => void
  errorMessage?: TransferReadinessRichErrorMessage | string
}) {
  const actions = useActions()
  const [networks, setNetworks] = useNetworks()
  const { childChain, childChainProvider, parentChainProvider, isDepositMode } =
    useNetworksRelationship(networks)

  const { isSmartContractWallet, isLoading: isLoadingAccountType } =
    useAccountType()
  const { isArbitrumOne, isArbitrumSepolia } = isNetwork(childChain.id)
  const nativeCurrency = useNativeCurrency({ provider: childChainProvider })

  const {
    app: { selectedToken }
  } = useAppState()

  const { address: walletAddress } = useAccount()

  const { destinationAddress, setDestinationAddress } =
    useDestinationAddressStore()
  const destinationAddressOrWalletAddress = destinationAddress || walletAddress

  const l1WalletAddress = isDepositMode
    ? walletAddress
    : destinationAddressOrWalletAddress

  const l2WalletAddress = isDepositMode
    ? destinationAddressOrWalletAddress
    : walletAddress

  const {
    eth: [ethL1Balance],
    erc20: [erc20L1Balances, updateErc20L1Balances]
  } = useBalance({
    provider: parentChainProvider,
    walletAddress: l1WalletAddress
  })
  const {
    eth: [ethL2Balance],
    erc20: [erc20L2Balances, updateErc20L2Balances]
  } = useBalance({
    provider: childChainProvider,
    walletAddress: l2WalletAddress
  })
  const { updateUSDCBalances } = useUpdateUSDCBalances({
    walletAddress: destinationAddressOrWalletAddress
  })

  useEffect(() => {
    if (nativeCurrency.isCustom) {
      updateErc20L1Balances([nativeCurrency.address])
    }
  }, [nativeCurrency, updateErc20L1Balances])

  useEffect(() => {
    if (
      !selectedToken ||
      !destinationAddressOrWalletAddress ||
      !utils.isAddress(destinationAddressOrWalletAddress)
    ) {
      return
    }

    if (
      isTokenMainnetUSDC(selectedToken.address) ||
      isTokenSepoliaUSDC(selectedToken.address) ||
      isTokenArbitrumOneNativeUSDC(selectedToken.address) ||
      isTokenArbitrumSepoliaNativeUSDC(selectedToken.address)
    ) {
      updateUSDCBalances()
      return
    }

    updateErc20L1Balances([selectedToken.address])
    if (selectedToken.l2Address) {
      updateErc20L2Balances([selectedToken.l2Address])
    }
  }, [
    selectedToken,
    updateErc20L1Balances,
    updateErc20L2Balances,
    destinationAddressOrWalletAddress,
    updateUSDCBalances
  ])

  const customFeeTokenBalances: Balances = useMemo(() => {
    if (!nativeCurrency.isCustom) {
      return { l1: ethL1Balance, l2: ethL2Balance }
    }

    return {
      l1: erc20L1Balances?.[nativeCurrency.address] ?? null,
      l2: ethL2Balance
    }
  }, [nativeCurrency, ethL1Balance, ethL2Balance, erc20L1Balances])

  const [loadingMaxAmount, setLoadingMaxAmount] = useState(false)
  const { openDialog: openTransferDisabledDialog } =
    useTransferDisabledDialogStore()
  const [oneNovaTransferDialogProps, openOneNovaTransferDialog] = useDialog()
  const [
    oneNovaTransferDestinationNetworkId,
    setOneNovaTransferDestinationNetworkId
  ] = useState<number | null>(null)
  const selectedTokenBalances = useSelectedTokenBalances()
  const isMaxAmount = amount === AmountQueryParamEnum.MAX

  const showUSDCSpecificInfo =
    (isTokenMainnetUSDC(selectedToken?.address) && isArbitrumOne) ||
    (isTokenSepoliaUSDC(selectedToken?.address) && isArbitrumSepolia)

  const [, setQueryParams] = useArbQueryParams()

  const { estimatedParentChainGasFees, estimatedChildChainGasFees } =
    useGasSummary()

  const setMaxAmount = useCallback(async () => {
    if (selectedToken) {
      const tokenBalance = isDepositMode
        ? selectedTokenBalances.l1
        : selectedTokenBalances.l2

      if (tokenBalance) {
        // For token deposits and withdrawals, we can set the max amount, as gas fees are paid in ETH / custom fee token
        setAmount(
          utils.formatUnits(
            tokenBalance,
            selectedToken?.decimals ?? defaultErc20Decimals
          )
        )
      }

      return
    }

    const customFeeTokenL1Balance = customFeeTokenBalances.l1
    // For custom fee token deposits, we can set the max amount, as the fees will be paid in ETH
    if (nativeCurrency.isCustom && isDepositMode && customFeeTokenL1Balance) {
      setAmount(
        utils.formatUnits(customFeeTokenL1Balance, nativeCurrency.decimals)
      )
      return
    }

    // We have already handled token deposits and deposits of the custom fee token
    // The remaining cases are ETH deposits, and ETH/custom fee token withdrawals (which can be handled in the same case)
    const nativeCurrencyBalance = isDepositMode ? ethL1Balance : ethL2Balance

    if (!nativeCurrencyBalance) {
      return
    }

    try {
      setLoadingMaxAmount(true)

      const nativeCurrencyBalanceFloat = parseFloat(
        utils.formatUnits(nativeCurrencyBalance, nativeCurrency.decimals)
      )
      const estimatedTotalGasFees =
        (estimatedParentChainGasFees ?? 0) + (estimatedChildChainGasFees ?? 0)
      const maxAmount = nativeCurrencyBalanceFloat - estimatedTotalGasFees * 1.4
      // make sure it's always a positive number
      // if it's negative, set it to user's balance to show insufficient for gas error
      setAmount(String(maxAmount > 0 ? maxAmount : nativeCurrencyBalanceFloat))
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingMaxAmount(false)
    }
  }, [
    nativeCurrency,
    ethL1Balance,
    ethL2Balance,
    isDepositMode,
    selectedToken,
    setAmount,
    selectedTokenBalances,
    estimatedParentChainGasFees,
    estimatedChildChainGasFees,
    customFeeTokenBalances
  ])

  // whenever the user changes the `amount` input, it should update the amount in browser query params as well
  useEffect(() => {
    setQueryParams({ amount })

    if (isMaxAmount) {
      setMaxAmount()
    }
  }, [amount, isMaxAmount, setMaxAmount, setQueryParams])

  useEffect(() => {
    // Different destination address only allowed for tokens
    if (!selectedToken) {
      setDestinationAddress(undefined)
    }
  }, [selectedToken, setDestinationAddress])

  const errorMessageElement = useMemo(() => {
    if (typeof errorMessage === 'undefined') {
      return undefined
    }

    if (typeof errorMessage === 'string') {
      return errorMessage
    }

    switch (errorMessage) {
      case TransferReadinessRichErrorMessage.GAS_ESTIMATION_FAILURE:
        return (
          <span>
            Gas estimation failed, join our{' '}
            <ExternalLink href={LYSTO_DISCORD} className="underline">
              Discord
            </ExternalLink>{' '}
            and reach out in #support for assistance.
          </span>
        )

      case TransferReadinessRichErrorMessage.TOKEN_WITHDRAW_ONLY:
      case TransferReadinessRichErrorMessage.TOKEN_TRANSFER_DISABLED:
        return (
          <>
            <span>This token can&apos;t be bridged over.</span>{' '}
            <button
              className="arb-hover underline"
              onClick={openTransferDisabledDialog}
            >
              Learn more.
            </button>
          </>
        )
    }
  }, [errorMessage, openTransferDisabledDialog])

  useUpdateUSDCTokenData()

  type NetworkListboxesProps = {
    from: Pick<NetworkListboxProps, 'onChange'>
    to: Omit<NetworkListboxProps, 'label'>
  }

  const networkListboxProps: NetworkListboxesProps = useMemo(() => {
    function getDestinationChains() {
      const destinationChainIds = getDestinationChainIds(
        networks.sourceChain.id
      )

      // if source chain is Arbitrum One, add Arbitrum Nova to destination
      if (networks.sourceChain.id === ChainId.ArbitrumOne) {
        destinationChainIds.push(ChainId.ArbitrumNova)
      }

      // if source chain is Arbitrum Nova, add Arbitrum One to destination
      if (networks.sourceChain.id === ChainId.ArbitrumNova) {
        destinationChainIds.push(ChainId.ArbitrumOne)
      }

      return (
        destinationChainIds
          // remove self
          .filter(chainId => chainId !== networks.destinationChain.id)
          .map(getWagmiChain)
      )
    }

    function shouldOpenOneNovaDialog(selectedChainIds: number[]) {
      return [ChainId.ArbitrumOne, ChainId.ArbitrumNova].every(chainId =>
        selectedChainIds.includes(chainId)
      )
    }

    const destinationChains = getDestinationChains()

    return {
      from: {
        onChange: async network => {
          if (networks.destinationChain.id === network.id) {
            setNetworks({
              sourceChainId: networks.destinationChain.id,
              destinationChainId: networks.sourceChain.id
            })
            return
          }

          setNetworks({ sourceChainId: network.id })
          actions.app.setSelectedToken(null)
        }
      },
      to: {
        disabled:
          isSmartContractWallet ||
          isLoadingAccountType ||
          destinationChains.length === 0,
        options: destinationChains,
        value: networks.destinationChain,
        onChange: async network => {
          if (shouldOpenOneNovaDialog([network.id, networks.sourceChain.id])) {
            setOneNovaTransferDestinationNetworkId(network.id)
            openOneNovaTransferDialog()
            return
          }

          setNetworks({
            sourceChainId: networks.sourceChain.id,
            destinationChainId: network.id
          })
          actions.app.setSelectedToken(null)
        }
      }
    }
  }, [
    isSmartContractWallet,
    isLoadingAccountType,
    networks.sourceChain,
    networks.destinationChain,
    setNetworks,
    openOneNovaTransferDialog
  ])

  const buttonStyle = useMemo(
    () => ({
      backgroundColor: getBridgeUiConfigForChain(networks.sourceChain.id).color
    }),
    [networks.sourceChain.id]
  )

  return (
    <div className="z-10 mb-2 flex flex-col    lg:gap-y-1">
      <NetworkContainer bgLogoHeight={138} network={networks.sourceChain}>
        <NetworkListboxPlusBalancesContainer>
          <NetworkSelectionContainer
            buttonStyle={buttonStyle}
            buttonClassName={twMerge(
              'arb-hover flex w-max items-center gap-1 md:gap-2 rounded px-3 py-2 text-sm text-white outline-none md:text-lg'
            )}
            onChange={networkListboxProps.from.onChange}
          >
            <span className="max-w-[220px] truncate text-sm leading-[1.1] md:max-w-[250px] md:text-lg">
              From: {getNetworkName(networks.sourceChain.id)}
            </span>
          </NetworkSelectionContainer>
          <BalancesContainer>
            <TokenBalance
              on={isDepositMode ? NetworkType.l1 : NetworkType.l2}
              balance={
                isDepositMode
                  ? selectedTokenBalances.l1
                  : selectedTokenBalances.l2
              }
              forToken={selectedToken}
              prefix={selectedToken ? 'Balance: ' : ''}
            />
            {nativeCurrency.isCustom ? (
              <>
                <TokenBalance
                  on={isDepositMode ? NetworkType.l1 : NetworkType.l2}
                  balance={
                    isDepositMode
                      ? customFeeTokenBalances.l1
                      : customFeeTokenBalances.l2
                  }
                  forToken={nativeCurrency}
                  prefix={selectedToken ? '' : 'Balance: '}
                />
                {/* Only show ETH balance on L1 */}
                {isDepositMode && <ETHBalance balance={ethL1Balance} />}
              </>
            ) : (
              <ETHBalance
                balance={isDepositMode ? ethL1Balance : ethL2Balance}
                prefix={selectedToken ? '' : 'Balance: '}
              />
            )}
          </BalancesContainer>
        </NetworkListboxPlusBalancesContainer>

        <div className="flex flex-col gap-1">
          <TransferPanelMainInput
            maxButtonProps={{
              loading: isMaxAmount || loadingMaxAmount,
              onClick: setMaxAmount
            }}
            errorMessage={errorMessageElement}
            value={isMaxAmount ? '' : amount}
            onChange={e => {
              setAmount(e.target.value)
            }}
          />

          {showUSDCSpecificInfo && (
            <p className="mt-1 text-xs font-light text-white">
              Bridged USDC (USDC.e) will work but is different from Native USDC.{' '}
              <ExternalLink
                href={USDC_LEARN_MORE_LINK}
                className="arb-hover underline"
              >
                Learn more
              </ExternalLink>
              .
            </p>
          )}

          {isDepositMode && selectedToken && (
            <p className="mt-1 text-xs font-light text-white">
              Make sure you have {nativeCurrency.symbol} in your{' '}
              {getNetworkName(childChain.id)} account, as you’ll need it to
              power transactions.
              <br />
              <ExternalLink
                href={ETH_BALANCE_ARTICLE_LINK}
                className="arb-hover underline"
              >
                Learn more
              </ExternalLink>
              .
            </p>
          )}
        </div>
        <EstimatedGas chainType="source" />
      </NetworkContainer>

      <SwitchNetworksButton />

      <NetworkContainer
        bgLogoHeight={58}
        network={networks.destinationChain}
        customAddress={destinationAddress}
      >
        <NetworkListboxPlusBalancesContainer>
          <NetworkListbox label="To:" {...networkListboxProps.to} />
          <BalancesContainer>
            {destinationAddressOrWalletAddress &&
              utils.isAddress(destinationAddressOrWalletAddress) && (
                <>
                  <TokenBalance
                    balance={
                      isDepositMode
                        ? selectedTokenBalances.l2
                        : selectedTokenBalances.l1
                    }
                    on={isDepositMode ? NetworkType.l2 : NetworkType.l1}
                    forToken={selectedToken}
                    prefix={selectedToken ? 'Balance: ' : ''}
                    tokenSymbolOverride={
                      // we need to send the proper, sanitized token-name to the component
                      selectedToken?.symbol
                        ? sanitizeTokenSymbol(selectedToken?.symbol, {
                            chainId: networks.destinationChain.id,
                            erc20L1Address: selectedToken?.address
                          })
                        : undefined
                    }
                  />
                  {/* In deposit mode, when user selected USDC on mainnet,
                  the UI shows the Arb One balance of both USDC.e and native USDC */}
                  {isDepositMode && showUSDCSpecificInfo && (
                    <TokenBalance
                      balance={
                        (isArbitrumOne
                          ? erc20L2Balances?.[CommonAddress.ArbitrumOne.USDC]
                          : erc20L2Balances?.[
                              CommonAddress.ArbitrumSepolia.USDC
                            ]) ?? constants.Zero
                      }
                      on={NetworkType.l2}
                      forToken={
                        selectedToken
                          ? { ...selectedToken, symbol: 'USDC' }
                          : null
                      }
                      tokenSymbolOverride="USDC"
                    />
                  )}
                  {nativeCurrency.isCustom ? (
                    <>
                      <TokenBalance
                        on={isDepositMode ? NetworkType.l2 : NetworkType.l1}
                        balance={
                          isDepositMode
                            ? customFeeTokenBalances.l2
                            : customFeeTokenBalances.l1
                        }
                        forToken={nativeCurrency}
                        prefix={selectedToken ? '' : 'Balance: '}
                      />
                      {!isDepositMode && <ETHBalance balance={ethL1Balance} />}
                    </>
                  ) : (
                    <ETHBalance
                      balance={isDepositMode ? ethL2Balance : ethL1Balance}
                      prefix={selectedToken ? '' : 'Balance: '}
                    />
                  )}
                </>
              )}
          </BalancesContainer>
        </NetworkListboxPlusBalancesContainer>
        {/* <EstimatedGas chainType="destination" /> */}
      </NetworkContainer>

      <TransferDisabledDialog />
      <OneNovaTransferDialog
        {...oneNovaTransferDialogProps}
        destinationChainId={oneNovaTransferDestinationNetworkId}
        amount={amount}
      />
    </div>
  )
}
