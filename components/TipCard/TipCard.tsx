import styles from './tipCard.module.css'

export default function TipCard({title, advice, count}: {
    title: string
    advice: string
    count: number

}){
    return (
         <div className={styles['tip-card']}>
              <div className={styles['tip-title-container']}>
                <div className={styles['tip-box']}>
                  <p>{count < 10 ? `0${count}`: count}</p>
                 </div>
                 <h6 className={styles.title}>{title}</h6>
              </div>
              
              <p className={styles['advice']}>
               {advice}
              </p>
            </div>
    )
}