import { useEffect, useMemo } from 'react'
import { useAccount } from 'wagmi'
import { useLocalStorage } from '@uidotdev/usehooks'

import { TransferPanel } from '../TransferPanel/TransferPanel'
import { SidePanel } from '../common/SidePanel'
import { useAppContextActions, useAppContextState } from '../App/AppContext'
import { ArbitrumStats, statsLocalStorageKey } from './ArbitrumStats'
import { SettingsDialog } from '../common/SettingsDialog'
import { TransactionHistory } from '../TransactionHistory/TransactionHistory'
import { useTransactionHistory } from '../../hooks/useTransactionHistory'
import { isTxPending } from '../TransactionHistory/helpers'
import { TransactionStatusInfo } from '../TransactionHistory/TransactionStatusInfo'
import { Footer } from '../common/Footer'
function TransactionHistorySidePanel() {
  const { closeTransactionHistoryPanel } = useAppContextActions()
  const {
    layout: { isTransactionHistoryPanelVisible }
  } = useAppContextState()
  const { address } = useAccount()

  const transactionHistoryProps = useTransactionHistory(address, {
    runFetcher: true
  })

  const { transactions, updatePendingTransaction } = transactionHistoryProps

  const pendingTransactions = useMemo(() => {
    return transactions.filter(isTxPending)
  }, [transactions])

  useEffect(() => {
    const interval = setInterval(() => {
      pendingTransactions.forEach(updatePendingTransaction)
    }, 10_000)

    return () => clearInterval(interval)
  }, [pendingTransactions, updatePendingTransaction])

  return (
    <SidePanel
      isOpen={isTransactionHistoryPanelVisible}
      onClose={closeTransactionHistoryPanel}
      scrollable={false}
      panelClassNameOverrides="pb-8"
    >
      <TransactionHistory props={{ ...transactionHistoryProps, address }} />
    </SidePanel>
  )
}

export function MainContent() {
  return (
    <>
      <div className="flex   h-full  min-h-[78vh] w-full flex-col items-center  justify-center ">
        <div className="   z-10   mx-auto flex w-full  flex-col  sm:max-w-[600px]  sm:pt-6">
          {/* <TransactionStatusInfo /> */}

          <TransferPanel />
        </div>
        <Footer />
      </div>

      <TransactionHistorySidePanel />
 
    </>
  )
}
