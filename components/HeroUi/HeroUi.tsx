import styles from './hero.module.css'
import Image from 'next/image'
import heroImage from '../../public/minecraft-hero.svg'
import night from '../../public/minecraft-nether-hero.svg'
export default function HeroUi(){

  function imageSource(){
    const time = new Date()
    const realtime = time.getHours()
    
    if(realtime > 18){
           return night
    }else{
      return heroImage
    }
   
  }

  imageSource()
    return (
        <div className={styles['hero-section']}>
          <Image 
          
          className={styles['hero-image']}
          alt="minecraft image" 
          src={imageSource()} />
         <div className={styles.content}>
          <h1 className={styles.hero_heading}>Quick Tips</h1>
          <p className={styles['shadow-text']}>
            Short tricks to survive,
            build and have fun
          </p>
          <p className={styles.start_container}>
          Start with Tip #1
         </p>
         </div>
         
        </div>
    )
}