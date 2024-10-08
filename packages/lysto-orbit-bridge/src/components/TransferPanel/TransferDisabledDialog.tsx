import { create } from 'zustand'

import { useActions, useAppState } from '../../state'
import { Dialog } from '../common/Dialog'
import { sanitizeTokenSymbol } from '../../util/TokenUtils'
import { useNetworks } from '../../hooks/useNetworks'

type TransferDisabledDialogStore = {
  isOpen: boolean
  openDialog: () => void
  closeDialog: () => void
}

export const useTransferDisabledDialogStore =
  create<TransferDisabledDialogStore>(set => ({
    isOpen: false,
    openDialog: () => set({ isOpen: true }),
    closeDialog: () => set({ isOpen: false })
  }))

export function TransferDisabledDialog() {
  const [networks] = useNetworks()
  const { app } = useAppState()
  const { selectedToken } = app
  const {
    app: { setSelectedToken }
  } = useActions()
  const {
    isOpen: isOpenTransferDisabledDialog,
    closeDialog: closeTransferDisabledDialog
  } = useTransferDisabledDialogStore()
  const unsupportedToken = sanitizeTokenSymbol(selectedToken?.symbol ?? '', {
    erc20L1Address: selectedToken?.address,
    chainId: networks.sourceChain.id
  })

  const onClose = () => {
    setSelectedToken(null)
    closeTransferDisabledDialog()
  }

  return (
    <Dialog
      closeable
      title="Token cannot be bridged here"
      cancelButtonProps={{ className: 'hidden' }}
      actionButtonTitle="Close"
      isOpen={isOpenTransferDisabledDialog}
      onClose={onClose}
    >
      <div className="flex flex-col space-y-4 py-4">
        <p>
          Unfortunately, <span className="font-medium">{unsupportedToken}</span>{' '}
          has a custom bridge solution that is incompatible with the canonical
          Lysto bridge.
        </p>
        <p>
          For more information please contact{' '}
          <span className="font-medium">{unsupportedToken}</span>
          &apos;s developer team directly or explore their docs.
        </p>
      </div>
    </Dialog>
  )
}
