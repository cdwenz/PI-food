import {IoFishOutline} from 'react-icons/io5'
import {GiWheat, GiMapleLeaf, GiCow} from 'react-icons/gi'
import {FaLeaf} from 'react-icons/fa'
import {GrStatusGood} from 'react-icons/gr'
import {SiWattpad, SiFoursquarecityguide, SiPandora, SiPassport} from 'react-icons/si'
import styles from './DietsIcons.module.css'

export default function DietsIcons({arrayDiets, card, id}){
    if(card === true){
        return(
            <>
                {
                    Array.isArray(arrayDiets)
                    ?
                    <div className={styles.spanDiet}>
                    {arrayDiets.map((e, index) => { 
                        return (<span  key={index} >
                        {e === 'gluten free' ? <GiWheat className={styles.icons} title="gluten free"/>
                        : e === 'dairy free' ? <GiCow className={styles.icons} title="dairy free"/>
                        : e === 'pescatarian' ? <IoFishOutline className={styles.icons} title="pescatarian"/>
                        : e === 'vegan' ? <GiMapleLeaf className={styles.icons} title="vegan"/>
                        : e === 'lacto ovo vegetarian' ?<FaLeaf className={styles.icons} title="lacto ovo vegetarian"/>
                        : e === 'whole 30' ? <SiWattpad className={styles.icons} title="whole 30"/>
                        : e === 'fodmap friendly' ? <SiFoursquarecityguide className={styles.icons} title="fodmap friendly"/>
                        : e === 'paleolithic' ? <SiPandora className={styles.icons} title="paleolithic"/>
                        : e === 'primal' ? <SiPassport className={styles.icons} title="primal"/>
                        : <GrStatusGood className={styles.icons} title="ketogenic"/>
                    }{" "}</span>)
                    })}
                    </div>
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
                    {arrayDiets.map((e,index) => { 
                        return (<>
                        {e === 'gluten free' ? <li key={index} className={styles.spanDiet}><GiWheat className={styles.icons}/>{" "+ e}</li>
                        : e === 'dairy free' ? <li key={index} className={styles.spanDiet}><GiCow className={styles.icons}/>{" "+ e}</li>
                        : e === 'pescatarian' ? <li key={index} className={styles.spanDiet}><IoFishOutline className={styles.icons}/>{" "+ e}</li>
                        : e === 'vegan' ? <li key={index} className={styles.spanDiet}><GiMapleLeaf className={styles.icons}/>{" "+ e}</li>
                        : e === 'lacto ovo vegetarian' ? <li key={index} className={styles.spanDiet}><FaLeaf className={styles.icons}/>{" "+ e}</li>
                        : e === 'whole 30' ? <li key={index} className={styles.spanDiet}><SiWattpad className={styles.icons}/>{" "+ e}</li>
                        : e === 'fodmap friendly' ? <li key={index} className={styles.spanDiet}><SiFoursquarecityguide className={styles.icons}/>{" "+ e}</li>
                        : e === 'paleolithic' ? <li key={index} className={styles.spanDiet}><SiPandora className={styles.icons}/>{" "+ e}</li>
                        : e === 'primal' ? <li key={index} className={styles.spanDiet}><SiPassport className={styles.icons}/>{" "+ e}</li>
                        :<li key={index} className={styles.spanDiet}><GrStatusGood className={styles.icons}/>{" "+ e}</li>
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
