"use client"
import Logo from "../Logo/Logo"
import { BarLoader } from "react-spinners"
import styles from './loadingUi.module.css'
import {  useRef } from "react"

export default function LoadingUi({title}: {
    title: string
}){
    const loaderRef = useRef<HTMLDivElement>(null)
  

   
    
    return(
        <div className={styles['loading-container']}>
            <div className={styles.blocks}>
                 <span className={styles.grass}></span>
                 <span className={styles.dirt}></span>
                 <span className={styles.stone}></span>
            </div>
            <p className={styles.title}>{title}</p>
            <div className={styles['progress-bar']}>      
            </div>
          
        </div>
    )
}