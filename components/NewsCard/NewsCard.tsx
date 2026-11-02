import styles from './newsCard.module.css'
import Link from 'next/link'
import { cleanDate } from '@/util/cleanDate'

type Props = {
    source: string | undefined 
    date: string | null 
    title: string | undefined
    href: string | undefined
}

export default function NewsCard({source, date, title, href}: Props) {
  return (
         <div className={styles['news-card']}>
            <div className={styles.source_name}>
                 <p className={styles.source_name}>{source}</p>
            </div>
            <div className={styles.content}>
                 <p className={styles.date}>{cleanDate(date)}</p>
               <p className={styles.source_title}>{title}</p>

               <Link className={styles.source} href={href || ""}>READ ON SOURCE</Link>
            </div>
            
        </div>
    
  )
}