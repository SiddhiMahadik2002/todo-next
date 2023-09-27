import styles from '@/styles/todosarea.module.css'
export const Todosarea =()=>{
   return(
    <div className={styles.todoarea}>
        <ul className={styles.ul_class}>
            <div className={styles.singletodo}>
                <li className={styles.todo}>Make the bed</li>
                <i class="fi fi-rr-cross-small"></i>
            </div>
            <div className={styles.singletodo}>
                <li className={styles.todo}>Clean the floors in all rooms</li>
                <i class="fi fi-rr-cross-small"></i>
            </div>
            <div className={styles.singletodo}>
                <li className={styles.todo}>Make the bed</li>
                <i class="fi fi-rr-cross-small"></i>
            </div>
            <div className={styles.singletodo}>
                <li className={styles.todo}>Make the bed</li>
                <i class="fi fi-rr-cross-small"></i>
            </div>
        </ul>
    </div>
   )
}