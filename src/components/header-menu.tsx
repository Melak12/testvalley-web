'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { testvalley_logo } from '@/lib/constants/asset-constants'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { ArrowDownIcon, Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
type Props = {}

const HeaderMenu = (props: Props) => {
    const [searchInput, setSearchInput] = useState("");
  return (
    <div className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5'>
        {/* Left Logo */}
        <div className='relative flex h-6 items-center cursor-pointer my-auto'>
            <Image
                src={testvalley_logo}
                alt='Testvalley Logo'
                height={100}
                width={100}
                style={{
                    objectFit: 'contain',
                    objectPosition: 'left',
                   
                }}
            />

        </div>

        {/* Middle */}
        <div className='flex items-center md:border-2 rounded-sm py-[1.5px] md:shadow-sm'>
        <MagnifyingGlassIcon className='lg:inline-flex lg:mx-2 h-8 bg-transparent text-zinc-600 p-2 rounded-full cursor-pointer'/>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='flex-grow pl-2 bg-transparent outline-none first-letter 
                    text-xs text-gray-600 placeholder-gray-400'
                    type='text'
                    placeholder='최근 검색 내용이 없어요'/>
            
            </div>

             {/* Right */}
             <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <ArrowDownIcon className='h-6 cursor-pointer' />
                <Link href='/' className='hidden md:inline'>로그인 / 회원가입 </Link>
                {/* <div className=' flex space-x-2 items-center border-2 p-2 rounded-full'>
                    <Bars3Icon className='h-6' />
                </div> */}
            </div>
    </div>
  )
}

export default HeaderMenu