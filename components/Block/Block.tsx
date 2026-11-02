import Image from "next/image"
import styles from './block.module.css'

export function Block({src, alt}: {src: string, alt: string}){
    return(
        <div className={styles.block}>
              <Image alt={alt} src={src} />
            </div>
    )
}