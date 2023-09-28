import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/header'
import { Todosarea } from '@/components/todosarea'
import { PercentageBar } from '@/components/percentbar'
import { Inputbar } from '@/components/inputBar'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [todoData,settodoData] = ([])

  return (
    
   <div className={styles.main}>
     <div className={styles.blurlayer}>
         <div className={styles.todoDiv}>
           <Header/>
           <Todosarea />
           <PercentageBar/>
           <Inputbar settodoData={settodoData}/>
         </div>
     </div>
   </div>
  
  )
}
