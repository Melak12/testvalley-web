import { getMainShortcuts } from '@/lib/repositories/shortcut-repo'
import React from 'react'
import ShortcutList from './shortcut-list';


const HomeShortcuts = async () => {
    const shortucts = await getMainShortcuts();
    if(!shortucts || shortucts.length === 0) {
        return <></>
    }
  return (
    <div className='my-6'>
        <ShortcutList shortcuts={shortucts} />
    </div>
  )
}

export default HomeShortcuts