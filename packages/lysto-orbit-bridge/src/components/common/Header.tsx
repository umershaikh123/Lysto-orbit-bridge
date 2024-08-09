import React from 'react'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ArbitrumLogoSmall from '@/images/ArbitrumLogo.svg'
import { useAccount } from 'wagmi'
import { isNetwork } from '../../util/networks'
import { useNetworks } from '../../hooks/useNetworks'
import { SidebarMenu } from '../Sidebar/SidebarMenu'
import { SidebarFooter } from '../Sidebar/SidebarFooter'
import { useIsTestnetMode } from '../../hooks/useIsTestnetMode'
import warningIcon from '@/icons/Warning.svg'
import { TestnetToggle } from './TestnetToggle'
import TestModeSelect from './Select'
function onMobileMenuOpen() {
  document.body.classList.add('overflow-hidden', 'menu-open')
}
function onMobileMenuClose() {
  document.body.classList.remove('overflow-hidden', 'menu-open')
}
import { Switch } from './atoms/Switch'
export function Header({ children }: { children?: React.ReactNode }) {
  const [{ sourceChain }] = useNetworks()
  const { isTestnet } = isNetwork(sourceChain.id)
  const { address, isDisconnected, isConnected } = useAccount()
  const [isTestnetMode, toggleTestnetMode] = useIsTestnetMode()

  return (
    <header
      className={twMerge(
        'sticky top-0 z-50 flex h-12 w-full justify-center bg-transparent px-4 backdrop-blur sm:relative sm:h-16 sm:px-6 sm:backdrop-blur-none [body.menu-open_&]:fixed'
      )}
    >
      <div className="flex w-full items-center justify-end gap-2 text-black">
        {/* <Image
          className="mr-auto h-6 w-6 sm:hidden"
          src={ArbitrumLogoSmall}
          alt="Arbitrum"
        /> */}
        {/* {isConnected && (
          <>
            <div className="flex  grow items-center  space-x-1  font-medium  text-black">
              <TestModeSelect />
            </div>
          </>
        )} */}
        <div className="hidden sm:flex">{children}</div>
      </div>
      <Disclosure>
        {({ open }) => (
          <>
            {!open && (
              <Disclosure.Button
                className="sm:hidden"
                aria-label="Menu Toggle Button"
                onClick={onMobileMenuOpen}
              >
                <Bars3Icon className="h-8 w-8 stroke-1 text-white" />
              </Disclosure.Button>
            )}
            <Disclosure.Panel>
              <HeaderMobile>{children}</HeaderMobile>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  )
}

function HeaderMobile({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-full flex-col items-center gap-1 overflow-auto bg-black font-normal sm:hidden">
      <Disclosure.Button
        className="flex h-12 w-full shrink-0 justify-end px-4 pt-3 sm:hidden"
        onClick={onMobileMenuClose}
      >
        <XMarkIcon className="h-[32px] w-[32px] text-white" />
      </Disclosure.Button>
      {children}
      {/* Mobile menu panel */}
      <SidebarMenu menuItemClickCallback={close} className="px-4" />
      <SidebarFooter className="px-[35px] pb-6" />
    </div>
  )
}
