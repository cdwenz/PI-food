import styles from './dishTypes.module.css'

export default function DishTypes({arrayDish}){
    return(
        <ul className={styles.dishtypes}>
        {
            Array.isArray(arrayDish)
            ?
            arrayDish.map(e=>{
                return <li>{e}</li>
            })
            :
            <li>Without Description</li>
        }
        </ul>
    )
}