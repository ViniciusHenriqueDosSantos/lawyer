'use client'
import { Home, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { createContext, ReactElement, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'
interface Option {
  name: string
  icon: ReactElement
  path: string
}
interface SideBarContextType {
  open: React.ReactNode
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBarContext = createContext<SideBarContextType | undefined>(undefined)

const SideBarProvider = ({
  children,
  className,
  background,
}: Readonly<{
  children: React.ReactNode
  className?: string
  background?: string
}>) => {
  const [open, setOpen] = useState<boolean>(false)
  const options: Option[] = [
    { name: "Home", icon: <Home />, path: "/" },
    { name: "Home", icon: <Home />, path: "/" },
    { name: "Home", icon: <Home />, path: "/" },
    { name: "Home", icon: <Home />, path: "/" },
    { name: "Home", icon: <Home />, path: "/" },

  ]
  return (
    <SideBarContext.Provider
      value={{
        open, setOpen
      }}
    >
      <div className='min-h-screen w-full flex transition-all'>


        <div className={twMerge('min-h-screen border-e-[0.5px] border-neutral-200 flex flex-col items-center bg-neutral-2  bg-light h-full transition-all ', open ? "xl:w-2/12 w-10/12" : "w-10 xl:w-16")}>
          <div className='flex items-center justify-between gap-3 w-full text-light bg-light-blue py-3'>
            {open &&
              <div className='flex justify-center w-9/12'>
                <Image className='w-auto h-[70px]' src="/images/whitelogo.png" alt='Integra Capital' width={150} height={150} />
              </div>
            }
            <div className={twMerge('flex justify-center', !open ? 'w-full' : 'w-3/12')}>
              <button className='text-light ' onClick={() => setOpen(!open)}><Menu /></button>
            </div>
          </div>
          <ul className='w-full pt-2 px-2 '>
            {options.map((option, i) => {
              return (
                <Link className={twMerge('flex mb-4 items-center gap-4 w-full text-dark group hover:bg-light-blue rounded-lg py-3 transition-all hover:scale-[1.020]', open ? 'px-2' : 'px-0')} key={i} href={option.path}>
                  <div className={twMerge('text-medium-blue group-hover:text-white w-full transition-all', open ? "w-auto flex justify-start" : "w-full flex justify-center")}>{option.icon}</div>
                  {open && <div className='mt-[2px] tracking-widest text-sm md:text-lg group-hover:text-white '>{option.name}</div>}

                </Link>
              )
            })}
          </ul>
        </div>
        <div className={twMerge(' bg-neutral-100 min-h-screen ', open ? "xl:w-10/12 w-2/12" : "w-full")}>
          {children}
        </div>
      </div>

    </SideBarContext.Provider>
  )
}

function useSideBar() {
  const context = useContext(SideBarContext)
  if (!context) {
    throw new Error('useSideBar must be used within a SideBarProvider')
  }
  return context
}

export { useSideBar, SideBarProvider }