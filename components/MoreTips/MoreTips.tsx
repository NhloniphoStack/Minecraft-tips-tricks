import type { Tip } from "@/types/tips";
import TipCard from "../TipCard/TipCard";
import styles from './moreTips.module.css'
import Link from "next/link";
export function MoreTips({tips, selectedTip}: {
    tips: Tip[],
    selectedTip: Tip
}){
     if(tips.filter(tip => tip.id !== selectedTip.id).length === 0){
        return;
     }

    return (
        <>
         <p className={styles['similar-text']}>MORE SIMILAR TIPS</p>
         <div className={styles['tips-container']}>
           
            {tips.filter(tip => tip.id !== selectedTip.id).slice(0, 3).map(tip => 
            <Link href={`/tips/${tip.id}`} key={tip.id}>
            <TipCard 
             advice={tip.advice}
             count={Number(tip.id)}
             title={tip.title}/> 
             </Link> 
             )}

            
        </div>
        </>
        
    )

}