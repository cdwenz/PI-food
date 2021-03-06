import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeQuery, setPage, setSearch } from "../../Dispatch/actions";
import Cards from "../Cards/Cards";
import styles from './search.module.css'

export default function Search(props){
    const name = props.match.params.name;
    const state = useSelector(state => state.recipesByQuery)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        async function get(name){
          dispatch(await setPage({page:1,value:'recipesByQuery'}))
           dispatch(await getRecipeQuery(name))
           dispatch(await setSearch(""))
        } 
        get(name)
        
    },[name, dispatch])

    return (
        <>
        {
            Array.isArray(state) 
          ?
            <Cards value='recipesByQuery'/>
          : 
            <div className={styles.notCont}><div className={styles.notFound}>Recipe not found</div></div>
        }
        </>
    )
}