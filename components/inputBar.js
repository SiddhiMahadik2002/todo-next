 
 import styles from '@/styles/inputbar.module.css'
 export const Inputbar = ()=>{
    return(
        <div className={styles.searchbar}>
            <input className={styles.input} type="text" placeholder="Enter a new task" />
            <i class="fi fi-ss-add"></i>
        </div>
    )
 }