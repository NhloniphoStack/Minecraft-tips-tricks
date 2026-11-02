"use server"
import Image from "next/image";
import styles from "./page.module.css";
import heroImage from '../public/minecraft-hero.svg'
import HeroUi from "../components/HeroUi/HeroUi";
import Logo from "../components/Logo/Logo";
import redstone from '../public/redstone_block.svg'
import mobs from '../public/mob_spawner.svg'
import stone from '../public/stone.svg'
import grass from '../public/grass_block.svg'
import { Block } from "../components/Block/Block";
import CategoryBlock from "@/components/CategoryBlock/CategoryBlock";
import TipCard from "@/components/TipCard/TipCard";
import FeaturedCategory from "@/components/FeaturedCategories/FeaturedCategory";
import { getAllNews } from "@/lib/news";
import Link from "next/link";
import type { Tip } from "@/types/tips";
import { getAllTips } from "@/lib/tips";
export default async function Home() {
   "use cache"
     const news = await getAllNews()
     const tips: Tip[] = await getAllTips({sort: 'release'})
   
    return (
      <main className={styles.container}>
        <HeroUi />
       

       
        <div className={styles['service-about']}>
        <div className={styles['service-container']}>
           <FeaturedCategory />
         <p className={styles['underline']}>NEW HERE? START HERE</p>
         <div className={styles['tip-layout']}>
            {tips.slice(0, 2).toReversed().map(tip =>  
            <Link href={`/tips/${tip.id}`} key={tip.id}>
            <TipCard 
             advice={tip.advice}
             count={Number(tip.id)} 
             title={tip.title}/>
             </Link>
             )}
         </div>

         <div>
           <p className={styles.underline}>MINECRAFT NEWS</p>

           <div className={styles.layout}>
           {news.slice(0, 3).map((newz, i) =>
           <Link key={i} href={newz.link}>
           <div  className={styles.news_card}>
            <p className={styles.source}>MINECRAFT.NET</p>
            <p className={styles.heading}>{newz.title}</p>
           </div>
           </Link> 
           )}
           </div>
       </div>

        </div>
       
       
        
        
       
          
        </div>
      </main>
    )

}
