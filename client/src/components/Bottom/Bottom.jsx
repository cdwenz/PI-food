import styles from './bottom.module.css'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
export default function Bottom(){

return (
 <div className={styles.bottomPrimary}>
   <div className={styles.social}>
  <a href="https://www.linkedin.com/in/cristian-wenz-ba4a4871/" 
    target="_blank" rel="noreferrer">
      <AiFillLinkedin className={styles.iconBottom}/> 
  </a>
  <a href="https://github.com/cdwenz" 
    target="_blank" rel="noreferrer">
      <AiFillGithub className={styles.iconBottom}/>
  </a>
  </div>
  <div >
  <NavLink exact to="/home" className={styles.item}>Home</NavLink>
  <NavLink exact to="/RecipeCreate" className={styles.item}>Create Recipe</NavLink>
  <a href="#title" className={styles.item}>Search</a>
  </div>
  <div className={styles.copyr}>
  ©2021 - Individual Project by cdwenz in henry bootcamp -
  </div>
</div>
)
}

