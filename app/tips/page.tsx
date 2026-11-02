
import styles from './page.module.css'
import CategoryNav from '@/components/CategoryNav/CategoryNav'
import TipCard from '@/components/TipCard/TipCard'
import TipsBrowse from '@/components/TipsBrowse/TipsBrowse'
import { getAllTips } from '@/lib/tips'
import type { Tip } from '@/types/tips'
export const instant = false
import { Suspense } from 'react'
import SearchForm from '@/components/SearchForm/SearchForm'
import SortControls from '@/components/SortControls/SortControls'
export default async function TipsPage({searchParams} : {
  searchParams: Promise<{category: string, search: string, sort: string}>
}){

  const {category} = await searchParams
  const {search} = await searchParams
  const {sort} = await searchParams
  const tips: Tip[] = await getAllTips({category, search, sort})
  
  return (
    <section className={styles['tips-container']}>
    <h3 className={styles.heading}>ALL TIPS</h3>
    <div className={styles['search-form-container']}>
         <div className={styles['sort-search-container']}>
          <SearchForm search={search}/>
          <SortControls />
         </div>
         
    </div>
    
    <CategoryNav />
    <Suspense fallback={<h2>Loading...</h2>}>
      <TipsBrowse search={search} tips={tips}/>
    </Suspense>
   
    </section>
  )
}