"use client"
import styles from './sideNav.module.css'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import close from '../../public/close.svg'
import Image from 'next/image'
import { useState } from 'react'
import type { Ref } from 'react'

export default function SideNav({showNav, onClick, ref}: {
  showNav:boolean
  onClick: () => void
  ref: Ref<HTMLDivElement> | undefined
}) {
  const [showMenu, setShowMenu] = useState(true)
  const pathname = usePathname()
  const router = useRouter()
  const active = {
     color: "yellow",
     borderLeft: "3px solid yellow",
  }

  function handleRedirect(){
     router.push('/submit')
  }

  function toggle(){
    setShowMenu(false)
  }



  
  return (
    <>
   {showNav && <div ref={ref} className={styles['sidenav']}>
      <div className={styles['logo-container']}>
        <div className={styles['logo']}>
               <Logo width={20} height={20}/>
               <p>Minecraft tips</p>
         </div>

         <button 
         onClick={onClick}
           className={styles['close-button']}>
          <Image alt='x' src={close} />
         </button>

      </div>
      
      <ul className={styles['nav-list']}>
        <li style={pathname === '/' ? active : {}}>
          <Link  href="/">
              HOME
          </Link>
        </li>

        <li style={pathname === '/tips' ? active : {}}>
          <Link  href="/tips">
              TIPS
          </Link>
        </li>

         <li style={pathname === '/news' ? active : {}}>
          <Link href="/news">
             NEWS
          </Link>
        </li>
      </ul>
      <div>
        <button 
        onClick={handleRedirect}
        className={styles['tip-submit-button']}>
          SUBMIT A TIP
        </button>
      </div>
    </div>}
    </>
  )
}


