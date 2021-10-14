import {IoFishOutline} from 'react-icons/io5'
import {GiWheat, GiMapleLeaf, GiCow} from 'react-icons/gi'
import {FaLeaf} from 'react-icons/fa'
import {GrStatusGood} from 'react-icons/gr'
import {SiWattpad, SiFoursquarecityguide, SiPandora, SiPassport} from 'react-icons/si'
import styles from './DietsIcons.module.css'

export default function DietsIcons({arrayDiets, card}){
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
                        return (<li key={index}>
                        {e === 'gluten free' ? <span><GiWheat className={styles.icons}/>{" "+ e}</span>
                        : e === 'dairy free' ? <span><GiCow className={styles.icons}/>{" "+ e}</span>
                        : e === 'pescatarian' ? <span><IoFishOutline className={styles.icons}/>{" "+ e}</span>
                        : e === 'vegan' ? <span><GiMapleLeaf className={styles.icons}/>{" "+ e}</span>
                        : e === 'lacto ovo vegetarian' ? <span><FaLeaf className={styles.icons}/>{" "+ e}</span>
                        : e === 'whole 30' ? <span><SiWattpad className={styles.icons}/>{" "+ e}</span>
                        : e === 'fodmap friendly' ? <span><SiFoursquarecityguide className={styles.icons}/>{" "+ e}</span>
                        : e === 'paleolithic' ? <span><SiPandora className={styles.icons}/>{" "+ e}</span>
                        : e === 'primal' ? <span><SiPassport className={styles.icons}/>{" "+ e}</span>
                        :<span><GrStatusGood className={styles.icons}/>{" "+ e}</span>
                    }</li>)
                    })}
                    </>
                    :
                    <span>Without Diets Types</span>
                }
            </ul>
        )
    }
    

}
