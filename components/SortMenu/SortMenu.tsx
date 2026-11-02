"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import styles from './sortMenu.module.css'
import type { Ref } from 'react'
export default function SortMenu({ref}: {ref: Ref<HTMLDivElement>}){
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const urlSearchParams = new URLSearchParams(searchParams.toString())
    
    const activeStyle = {
        color: 'yellow'
     }

     function  handleSelect(option: string){

        urlSearchParams.set("sort", option)
        const url = `${pathname}?${urlSearchParams.toString()}`
        router.push(url)
       
     }
    
    return (
        <div ref={ref} className={styles['sort-menu']}>
            <ul  className={styles['sort-list']}>
                <li onClick={() => handleSelect('release')}>
                    <div >
                        <span >RELEASE</span>
                    </div>
                </li>

                <li onClick={() => handleSelect('alpha')}>
                    <div >
                        <span >A-Z</span>
                    </div>
                </li>
            </ul>
            </div>
    )
}