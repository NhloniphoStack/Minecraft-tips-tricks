import { Block } from "../Block/Block"
import styles from '../CategoryBlock/category.module.css'

export default function CategoryBlock({src, alt, text}: {
    src: string 
    alt: string
    text: string
}){
    return (
        <div className={styles['option-block']}>
            <Block src={src} alt={alt}/>
            <p>{text}</p>
          </div>
    )
}