import {useSelector} from "react-redux"
import Cards from "../Cards/Cards";
import styles from "./home.module.css";
import {MdOutlineDoNotDisturbOnTotalSilence} from "react-icons/md"

export default function Home(){
  
  
  const state = useSelector(state => state)
  
  return (
      <>
      {
        Array.isArray(state.recipes) 
      ?
        <Cards value='recipes'/>
      : 
        <div className={styles.notCont}>
          <div className={styles.notFound}>
            <MdOutlineDoNotDisturbOnTotalSilence className={styles.red}/>
              Waiting for server
            <MdOutlineDoNotDisturbOnTotalSilence className={styles.red}/>
          </div>
        </div>
      }
      </>
    )
}