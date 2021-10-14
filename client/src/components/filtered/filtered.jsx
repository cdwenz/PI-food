import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { order, orderByDiet, orderScore } from "../../Dispatch/actions";
import styles from './filtered.module.css'

export function Filtered({value}){
    const dispatch = useDispatch();
    const diets = useSelector(state => state.diets)

    useEffect(()=>{
        document.getElementById('selectName').selected = true
            document.getElementById('selectScore').selected = true
            document.getElementById('selectDiet').selected = true
    },[])

    async function onClickClear(){
        dispatch(await orderScore({target: 'ALL', value}))
        document.getElementById('selectName').selected = true
        document.getElementById('selectScore').selected = true
        document.getElementById('selectDiet').selected = true
    }

    async function handleNameChange(e){
        dispatch(await order({target: e.target.value, value}))    
     }
     
     async function handleScoreChange(e){
         dispatch(await orderScore({target: e.target.value, value}))
         document.getElementById('selectName').selected = true
     }
 
     async function handleDietChange(e){
         dispatch(await orderByDiet({target: e.target.value, value}))
        
     }

     return (
        <div className={styles.divFilter}>
        <select name="A-Z" onChange={handleNameChange}>
            <option value="none" id="selectName" defaultValue disabled>Select Order</option>
            <option value="ASC">A-Z</option>
            <option value="DESC">Z-A</option>
        </select>
        <select name="Score" onChange={handleScoreChange}>
            <option value="none" id="selectScore" defaultValue disabled>Select Score</option>
            <option value="ALL">ALL</option>
            <option value="0-25">0-25</option>
            <option value="26-50">26-50</option>
            <option value="50-75">50-75</option>
            <option value="75-100">75-100</option>
        </select>
        <select name="selectDiet" onChange={handleDietChange}>
            <option value="none" id="selectDiet" defaultValue disabled>Select Diet</option>
            <option value="ALL">ALL</option>
        {
            diets.length > 0
            ?
                diets.map((e, index) => {
                    return <option key={index} value={e}>{e}</option>
                })
            :
                null
        }
        </select>
        <button onClick={onClickClear} className={styles.btnFilter}>Clear Filters</button>
    </div>
     )
}