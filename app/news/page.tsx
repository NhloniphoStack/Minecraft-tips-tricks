import styles from './page.module.css'
import { getAllNews } from '@/lib/news'
import Link from 'next/link'
import NewsCard from '@/components/NewsCard/NewsCard'
export default async function NewsPage(){
     "use cache" 
    const news = await getAllNews()
  
    return (
        <section className={styles['news-container']}>
         <h3 className={styles['heading']}>Minecraft News</h3>
         <p className={styles['user-note']}>
            Headlines from the official site and gaming news,
             linked to the original article
        </p>

        <div className={styles['news-browse']}>
         {news.map((newz, i) => <NewsCard
         key={i}
         href={newz.link}
         source="MINECRAFT.NET"
         date={newz.publishedAt as string | null}

          title={newz.title}/>) }
        </div>
        
        </section>
    )
} 