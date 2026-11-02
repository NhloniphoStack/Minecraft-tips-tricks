import mobIcon from '../../public/broken-block.svg'
import Image from 'next/image'
import styles from './errorUi.module.css'
import { useRouter } from 'next/navigation'
export default function ErrorUi({retry, title}: {
    retry: () => void
    title: string
}){

    const router = useRouter()

    function handleReturn(){
       router.push('/')
    }
    return (
         <div className={styles['error-container']}>
            <Image   alt='mob' src={mobIcon}/>
            <h3>{title}</h3>
            <p>Something broke on the way. Check your connection and try again</p>
            <div className={styles['error-buttons-container']}>
                <button 
                onClick={() => retry()}
                className={styles['try-again-button']}>
                    TRY AGAIN
                </button>
                <button
                onClick={handleReturn}
                 className={styles['home-button']}>
                    GO HOME
                </button>
            </div>
        </div>
    )
}