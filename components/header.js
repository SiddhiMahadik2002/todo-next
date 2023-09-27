
import styles from '@/styles/header.module.css'
export const Header=()=>{
    return(
       
            <div className={styles.header}>
                 <p className={styles.heading}>MY TODO</p>
                 <p className={styles.date}>25/07/2002</p>
            </div>
       
    )
}