"use client"
import styles from './sortControls.module.css'
import SortMenu from '../SortMenu/SortMenu'
import { useState } from 'react'
import { useClickOutside } from '@/hooks/useClickOutside'
export default function SortControls(){
    const [showMenu, setShowMenu] = useState(false)

    function toggle(){
        setShowMenu(prev => !prev)
    }
    const sortMenuRef = useClickOutside(() => {
        setShowMenu(false)
    })
    return (
        <div>
            <button onClick={toggle} className={styles['sort-select-button']}>
                Sort: ▼
            </button>
  
          {showMenu &&  <SortMenu ref={sortMenuRef}/>}
        </div>
    )
}