import styles from './page.module.css'
import { getAllTips, getTipById } from '@/lib/tips'
import { Suspense } from 'react'
import type { Tip } from '@/types/tips'
import FeedBackBox from '@/components/FeedBackBox/FeedBackBox'
import TipDetailUi from '@/components/TipDetailUi/TipDetailUi'
import { MoreTips } from '@/components/MoreTips/MoreTips'
import { notFound } from 'next/navigation'
export const instant = false
export default async function TipPage({params}: {params: Promise<{id: string}>}){
    "use cache"
    const {id} = await params

    let tipID = 0 ;


    if(typeof id === "string"){
         tipID = Number(id)

         if(Number.isNaN(tipID)){
            return notFound()
         }
    } 

    if(tipID === 0){
        return notFound()
    }

    const tip = await getTipById(tipID)
    
    if(!tip?.tip){
        return notFound()
    }
 
    const category = tip?.tip.name

    const moreTips: Tip[] = await getAllTips({category})
    
    
  return(
        <section className={styles['details-container']}>
        <Suspense fallback={<h2>Loading...</h2>}>
        
        <div className={styles['details-layout']}>
            <h2>
            {tip.tip.title}
             </h2>
             <div className={styles['detail-grid']}>

            <div className={styles['details-box']}>
                <p>
                {tip.tip.advice}
                </p>
                <TipDetailUi tip={tip}/>
             </div>

             <FeedBackBox />
        
        </div>
        <MoreTips selectedTip={tip.tip} tips={moreTips}/>
        </div>
       
        
        
        </Suspense>
        </section>
    )
}