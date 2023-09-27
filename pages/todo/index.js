import { Header } from '@/components/header';
import styles from '@/styles/todo.module.css'

const Todo = ()=>{
    return(
        <div className={styles.main}>
            <Header/>
        </div>
    )
}

export default Todo;