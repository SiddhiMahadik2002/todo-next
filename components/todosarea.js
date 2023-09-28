import styles from '@/styles/todosarea.module.css'
export const Todosarea =(props)=>{
   return(
    <div className={styles.todoarea}>
        <ul className={styles.ul_class}>
            <div className={styles.singletodo}>
                <li className={styles.todo}>{props.data}</li>
                <i class="fi fi-rr-cross-small"></i>
            </div>

        </ul>
    </div>
   )
}