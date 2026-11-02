
import CategoryBlock from '../CategoryBlock/CategoryBlock'
import redstone from '../../public/redstone_block.svg'
import mobs from '../../public/mob_spawner.svg'
import stone from '../../public/stone.svg'
import grass from '../../public/grass_block.svg'
import styles from './featuredCategory.module.css'
import Link from 'next/link'
export default function FeaturedCategory(){
    return (
          <div className={styles['service-layout']}>
          <Link href={`/tips?category=Survival`}>
            <CategoryBlock 
            alt="grass"
            text="SURVIVAL"
            src={grass}/>
          </Link>
           
          <Link href={`/tips?category=Building`}>
            <CategoryBlock 
            alt="stone"
            text="BUILDING"
            src={stone}/>
          </Link>
         
          <Link href="/tips?category=Redstone">
            <CategoryBlock 
            alt="red stone"
            text="REDSTONE"
            src={redstone}/>

          </Link>

          <Link href="/tips?category=Mobs">
                    
            <CategoryBlock 
            alt="mobs"
            text="MOBS"
            src={mobs}/>
            </Link>
          

          
        
         
        </div>
    )
}