"use client"
import { useState } from 'react'
import styles from './feedBackBox.module.css'

export default function FeedBackBox(){
     const [showResults, setShowResults] = useState(false)
    function handleSubmit(){
        //logic
        setShowResults(prev => !prev)
    }
    return(
         <div className={styles['feed-back-container']}>
            {!showResults && <><p className={styles.heading}>Did this help?</p>
            <div className={styles['button-container']}>
                <button onClick={handleSubmit}className={styles['yes-button']}>
                    Yes
                </button>

                <button className={styles['no-button']}>
                    No
                </button>
            </div>
            </>
            }
            {showResults && 
            <div className={styles['results']}>
                
                
                <div className={styles['feed-back']}>
                    <span className={styles['tick']}>✓</span>
                    <div className={styles['site-feedback']}>
                        <p>Thanks for the feedback</p>
                        <p className={styles['saved-text']}>
                        Your vote is saved
                        </p>
                    </div>
                    
                </div>
               
            </div>}
            <span className={styles['stats']}>unknown players found this helpful</span>
        </div>
    )
}