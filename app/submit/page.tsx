import styles from './page.module.css'
import TipForm from '@/components/TipForm/TipForm'
export default function SubmitTipPage(){
    return (
        <section className={styles['submit-container']}>
       <div className={styles['submit-layout']}>
        <h2>SUBMIT A TIP</h2>
        <p className={styles['tip-text']}>Got a trick that saves time? Share
             it with other players
        </p>
        <TipForm />

       </div>
        
        </section>
    )
}