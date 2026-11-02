"use client"
import { SetStateAction, useState } from 'react'
import styles from './categorySelect.module.css'
import { useClickOutside } from '@/hooks/useClickOutside'
export default function CategorySelect({select} : {
     select: (value: string) => void
}){
    const [options, SetOptions] = useState([{
        value: 'Survival',
        display: 'SURVIVAL',
        id: 1,
        active: false
    },
        {
        value: 'Building',
        display: 'BUILDING',
        id: 2,
        active: false
       }, 
       {
        value: 'Redstone',
        display: 'REDSTONE',
        id: 4,
        active: false
       }
])

    const [showMenu, setShowMenu] = useState(false)
    const [selectedOpt, setSelectedOpt ] = useState("")
    const [id, setId] = useState("")

  const active = {
    backgroundColor: ' rgb(255, 225, 0)',
     color: 'black'
  }
    function handleClick(id: number, value: string){
         select(value)
         setId(id.toString())
         setSelectedOpt(value)
     SetOptions(prev => prev.map(option => {
        return option.id === id ? {...option, active: !option.active} : {...option, active: false}
     }))

     setShowMenu(false)
    }

    function handleToggle(){
        setShowMenu(prev => !prev)
    }

    const menuRef = useClickOutside(() => {
        setShowMenu(false)
    })
    return (
        <div className={styles['category-select']}>
            <button
            type='button'
            onClick={handleToggle} 
            className={styles['select-button']}>
                Category: {selectedOpt} {id.length === 0 && "*"}▼ 
            </button>
            <div ref={menuRef} className={styles['select-menu']}>
                {showMenu && <ul className={styles['select-list']}>
                     {options.map(option =>
                     <li 
                     style={option.active ? active : {}}
                     onClick={() => handleClick(option.id, option.value)} key={option.id}>
                        <div>
                            {option.active && <span className={styles.tick}>✓</span>}
                            <span>{option.display}</span>
                        </div>
                    </li>)}
                </ul>}
            </div>
            <input value={id} name="category" type='hidden' required/>
        </div>
    )
}