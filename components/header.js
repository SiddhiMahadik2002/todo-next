
import styles from '@/styles/header.module.css'
export const Header=()=>{
    const currentDate = new Date();


    const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
  const day = currentDate.getDate();

  const formattedDate = `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`;


    return(
       
            <div className={styles.header}>
                 <p className={styles.heading}>MY TODO</p>
                 <p className={styles.date}>{formattedDate}</p>
            </div>
       
    )
}