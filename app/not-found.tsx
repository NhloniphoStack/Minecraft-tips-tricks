import NotFoundUi from "@/components/NotFoundUi/NotFoundUi"
import  styles from './page.module.css'
export default function NotFoundPage(){
    return (
        <section className={styles['not-found-container']}>
           <NotFoundUi />
        </section>
    )
}