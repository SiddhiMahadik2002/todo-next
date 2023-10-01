import styles from '@/styles/todosarea.module.css'
export const Todosarea = ({ data,settodoData }) => {
   
    const deleteTodoItem=(index)=>{
        const updatedTodos = data.filter((idx)=>idx!==index)
        settodoData(updatedTodos)
    }
    
    return (
        <div className={styles.todoarea}>
            <ul className={styles.ul_class}>
                {
                    data.map((item ,index)=> (
                        <div className={styles.singletodo}>
                            <li className={styles.todo} >{item}</li>
                            <div className={styles.deleteTodo} onClick={()=>{deleteTodoItem(index)}}>
                                <i class="fi fi-rr-cross-small"></i>
                            </div>
                        </div>
                    )
                    )}
            </ul>
        </div>
    )
}