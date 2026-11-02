import styles from './failedSubmission.module.css'

export default function FailedSubmission(){

    return (
        <div className={styles['error-container']}>
            <p>Tip didn't send. Check your connection and try again</p>
        </div>
    )

}