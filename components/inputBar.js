
import styles from '@/styles/inputbar.module.css'
import { useState } from 'react'

export const Inputbar = ({settodoData}) => {
    
  const[todo,setTodo]=useState([])
    const [input, setinput] = useState();
  
    const addTodo = ()=>{

       settodoData(prevtodo=>[...prevtodo,input])
       setinput('')
       
    }
    console.log(todo)  
       


    console.log(input)

    return (
        <div className={styles.searchbar}>
            <input value={input} onChange={(e) => setinput(e.target.value)} 
                className={styles.input} type="text" placeholder="Enter a new task" />

            <div onClick={addTodo} className={styles.icon}>
                <i class="fi fi-ss-add"></i>
            </div>
        </div>
    )
}