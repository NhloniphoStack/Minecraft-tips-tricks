import Link from "next/link";
import { ReactNode } from "react";
import styles from './navLink.module.css'
export default function NavLink({children, href, isActive}:
     {
        children: ReactNode
        href: string
        isActive: boolean

     }){

     const activeStyle = {
        backgroundColor: '#5D9B2E'
     }
     return(
        <Link className={styles['nav-button']}  style={isActive ? activeStyle: {}} href={href}>{children}</Link>
     )

}