import styles from './logo.module.css'

export default function Logo({width, height} : {
    width?: number 
    height?: number 
}){
    const style = {
        width: width,
        height: height
    }
    return (
        <div style={style} className={styles.logo}>
                    <div className={styles.grass}></div>
                <div className={styles.dirt}></div>   
        </div>
    )
}