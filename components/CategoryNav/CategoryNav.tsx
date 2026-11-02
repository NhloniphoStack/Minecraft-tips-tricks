"use client"
import Link from "next/link"
import styles from './categoryNav.module.css'
import NavLink from "../NavLink/NavLink"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
export default function CategoryNav(){
    const pathname = usePathname()
    const searchParams = useSearchParams()
    //create category links eg; all, Survival, bulding, redstone, mobs
    //made them put a query on the url
    //use the query to dynamically filter the tips on database
    //show results
   const category = searchParams.get('category')
    const urlSearchParams = new URLSearchParams(searchParams.toString())
    const url = `${pathname}?category=${category}`
    console.log(url)
    return(
        <div className={styles['category-nav']}>

            <NavLink isActive={url === '/tips?category=null'} href="/tips">All</NavLink>
            <NavLink isActive={url === "/tips?category=Survival"} href="?category=Survival">SURVIVAL</NavLink>
            <NavLink isActive={url === "/tips?category=Redstone"} href="?category=Redstone">REDSTONE</NavLink>
            <NavLink isActive={url === "/tips?category=Mobs"} href="?category=Mobs">MOBS</NavLink>
        </div>
    )
}