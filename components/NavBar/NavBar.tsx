"use client"
import styles from './navBar.module.css'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import menuIcon from '../../public/menu.svg'
import { usePathname, useRouter } from 'next/navigation'
import SideNav from '../SideNav/SideNav'
import { useState } from 'react'
import { useClickOutside } from '@/hooks/useClickOutside'
export default function NavBar(){
    const router = useRouter()
    const pathname = usePathname()

    const [showSideBar, setShowSideBar] = useState(false)
    function handleSubmit(){
          router.push('/submit')
    }

    const active = {
        color: 'yellow',
        borderBottom: '2px solid yellow'
    }

    function toggle(){
        setShowSideBar(prev => !prev)
    }

      const menuRef = useClickOutside(() => {
    setShowSideBar(false)
         })
    return (
        <>
        <div className={styles['nav-bar']}>
            <Link  href="/">
             <div className={styles['logo-container']}>
                <Logo />
                <h4 id={styles['logo-heading']}>Minecraft Tips</h4>
            </div>
            </Link>
           

         <div className={styles['middle-nav']}>
            <ul className={styles["nav-list"]}>
                <li>
                 <Link style={pathname === '/tips' ? active : {}} className={styles.nav_links} href="/tips">TIPS</Link>
                </li>
                <li>
                    <Link style={pathname === '/news' ? active : {}} className={styles.nav_links} href="/news">NEWS</Link>
                </li>
            </ul>
         </div>

         <div className={styles['right-nav']}>
            <button onClick={handleSubmit} className={styles['tip-submit-button']}>
                Submit a tip
            </button>
         </div>

         <div className={styles['mobile-nav-container']}>
            <button 
            onClick={toggle}
            className={styles['nav-menu-button']}>
                <img alt='menu icon' src={menuIcon.src} />
            </button>

         </div>

        </div>
        <SideNav ref={menuRef} onClick={toggle} showNav={showSideBar}/>
        </>
        
    )
}