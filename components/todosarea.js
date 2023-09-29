import styles from '@/styles/todosarea.module.css'
export const Todosarea =({data})=>{
   return(
    <div className={styles.todoarea}>
        <ul className={styles.ul_class}>
        {   
            data.map(item=>(
            <div className={styles.singletodo}>
                <li className={styles.todo}>{item}</li>
                <i class="fi fi-rr-cross-small"></i>
                    </div>
                    )
       ) }
        </ul>
    </div>
   )
}