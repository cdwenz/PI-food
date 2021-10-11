import {IoFishOutline} from 'react-icons/io5'
import {GiWheat, GiMapleLeaf, GiCow} from 'react-icons/gi'
import {FaLeaf} from 'react-icons/fa'
import {GrStatusGood} from 'react-icons/gr'
import {SiWattpad, SiFoursquarecityguide} from 'react-icons/si'
import styles from './DietsIcons.module.css'

export default function DietsIcons({arrayDiets, card}){
    if(card === true){
        return(
            <>
                {
                    Array.isArray(arrayDiets)
                    ?
                    <span>
                    {arrayDiets.map(e => { 
                        return (<>
                        {e === 'gluten free' ? <GiWheat className={styles.icons}/>
                        : e === 'dairy free' ? <GiCow className={styles.icons}/>
                        : e === 'pescatarian' ? <IoFishOutline className={styles.icons}/>
                        : e === 'vegan' ? <GiMapleLeaf className={styles.icons}/>
                        : e === 'lacto ovo vegetarian' ?<FaLeaf className={styles.icons}/>
                        : e === 'whole 30' ? <SiWattpad className={styles.icons}/>
                        : e === 'fodmap friendly' ? <SiFoursquarecityguide className={styles.icons}/>
                        :<GrStatusGood className={styles.icons}/>
                    }</>)
                    })}
                    </span>
                    :
                    <span>Without Diets Types</span>
                }
            </>
        )
    }else{
        return(
            <ul>
                {
                    Array.isArray(arrayDiets)
                    ?
                    <>
                    {arrayDiets.map(e => { 
                        return (<>
                        {e === 'gluten free' ? <li className={styles.spanDiet}><GiWheat className={styles.icons}/>{" "+ e}</li>
                        : e === 'dairy free' ? <li className={styles.spanDiet}><GiCow className={styles.icons}/>{" "+ e}</li>
                        : e === 'pescatarian' ? <li className={styles.spanDiet}><IoFishOutline className={styles.icons}/>{" "+ e}</li>
                        : e === 'vegan' ? <li className={styles.spanDiet}><GiMapleLeaf className={styles.icons}/>{" "+ e}</li>
                        : e === 'lacto ovo vegetarian' ? <li className={styles.spanDiet}><FaLeaf className={styles.icons}/>{" "+ e}</li>
                        : e === 'whole 30' ? <li className={styles.spanDiet}><SiWattpad className={styles.icons}/>{" "+ e}</li>
                        : e === 'fodmap friendly' ? <li className={styles.spanDiet}><SiFoursquarecityguide className={styles.icons}/>{" "+ e}</li>
                        :<li className={styles.spanDiet}><GrStatusGood className={styles.icons}/>{" "+ e}</li>
                    }</>)
                    })}
                    </>
                    :
                    <span>Without Diets Types</span>
                }
            </ul>
        )
    }
    

}
