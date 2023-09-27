 
 import styles from '@/styles/searchbar.module.css'
 export const Searchbar = ()=>{
    return(
        <div className={styles.searchbar}>
            <input className={styles.input} type="text" placeholder="Enter a new task" />
            <i class="fi fi-ss-add"></i>
        </div>
    )
 }