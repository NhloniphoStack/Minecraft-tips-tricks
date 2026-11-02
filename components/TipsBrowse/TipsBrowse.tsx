import Link from "next/link"
import TipCard from "../TipCard/TipCard"
import styles from './tipsBrowse.module.css'
import type { Tip } from "@/types/tips"
import NoResults from "../NoResults/NoResults"
export default function TipsBrowse({tips, search}: {
    tips: Tip[],
    search?: string
}){
    return (
        <div className={styles['tips-browse']}>
          <p>{tips.length} tips across 4 categories</p>
           {search && 
           <h2 className={styles['search-results']}>Search Results for "{search}"</h2>}
          <div className={styles['all-tips']}>
             {tips.toReversed().map(tip =>
             <Link  key={tip.id}  href={`/tips/${tip.id}`}>
                <TipCard
               
             title={tip.title}
             count={Number(tip.id)} 
             advice={tip.advice}
             />
             </Link> 
             )}
          </div>
           {tips.length === 0 && search && <NoResults search={search}/>}
         </div>
    )
}