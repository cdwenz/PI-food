import styles from './dishTypes.module.css'

export default function DishTypes({arrayDish}){
    return(
        <ul className={styles.dishtypes}>
        {
            Array.isArray(arrayDish)
            ?
            arrayDish.map((e, index)=>{
                return <li key={index}>{e}</li>
            })
            :
            <li>Without Description</li>
        }
        </ul>
    )
}