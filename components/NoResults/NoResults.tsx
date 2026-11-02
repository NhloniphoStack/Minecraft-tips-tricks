"use client"
import { useRouter } from 'next/navigation'
import styles from './noResults.module.css'

export default function NoResults({search}: {
    search: string
}){
    const router = useRouter()
    function handleBack(){
        router.push('/tips')
    }
    return(
        <div className={styles['empty-results']}>
            <p className={styles['title']}>
                NO RESULTS FOUND
            </p>

            <p className={styles.alert}>
                Nothing matches "{search}".
                 Try a different word or check the spelling
            </p>
            <button onClick={handleBack} className={styles['browse-button']}>
                BROWSE ALL TIPS
            </button>
        </div>
    )
}