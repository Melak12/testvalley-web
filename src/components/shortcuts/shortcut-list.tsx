import { ShortcutModel } from '@/lib/models/shortcut-model'
import Image from 'next/image'
import React from 'react'

interface ShortcutListProps {
    shortcuts: ShortcutModel[]
}

const ShortcutList = ({shortcuts}: ShortcutListProps) => {
  return (
    <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-wrap gap-6 px-8 items-center justify-center'>
        {
            shortcuts.map((shortcut) => {
                return (
                    <div key={shortcut.mainShortcutId}>
                        <div className='flex flex-col justify-center items-center gap-2 cursor-pointer hover:shadow-md p-2 transition hover:duration-300 hover:scale-120 '>
                            {/* image */}
                            {
                                shortcut.imageUrl && <Image src={shortcut.imageUrl} width={60} height={60} alt={shortcut.title}  className='rounded-full' />
                            }

                            {/* Title */}
                            <p className='text-sm'>{shortcut.title}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default ShortcutList