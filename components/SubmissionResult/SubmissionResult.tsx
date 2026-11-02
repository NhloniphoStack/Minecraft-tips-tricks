"use client"
import { useRouter } from 'next/navigation'
import styles from './submissionResult.module.css'





export default function SubmissionResult() {
const router = useRouter()

function handleRedirect(){
    router.push('/tips')
}



 function refresh(){
      router.refresh()
    }
  return (
    <div className={styles['results-container']}>
        <div className={styles.box}>✓</div>
        <p className={styles['title']}>TIP SUBMITTED!</p>
        <p className={styles.thanks}>Thanks for sharing . Your tip  is waiting to be checked </p>
        <div className={styles['button-container']}>
            <button 
            onClick={handleRedirect}
            className={styles['back-button']}>
                BACK TO TIPS
            </button>

             <button
             onClick={refresh}
              className={styles['again-button']}>
                SUBMIT ANOTHER
            </button>
        </div>
    </div>
  )
}