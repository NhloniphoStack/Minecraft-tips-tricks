"use client"
import styles from './notFoundui.module.css'
import icon from '../../public/minecraft-404-icon.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function NotFoundUi(){
    const router = useRouter()

    function handleRedirect(nav: string){
        router.push(nav)
    }
    return (
        <div className={styles['not-found-container']}>
          <Image 
          src={icon}
          alt='404'/>
          <p className={styles.title}>
            PAGE NOT FOUND!
          </p>

          <p className={styles['alert']}>
            This block isn't here. It may have beem moved
            or mined
          </p>
          <div className={styles['button-container']}>
            <button
            onClick={() => handleRedirect('/')}
             className={styles['back-button']}>
                GO HOME
            </button>

            <button 
            onClick={() => handleRedirect('/tips')}
            className={styles['browse-button']}>
                BROWSE TIPS
            </button>
          </div>
        </div>
    )
}