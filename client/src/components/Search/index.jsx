import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeQuery, setSearch } from "../../Dispatch/actions";
import Cards from "../Cards/Cards";


export default function Search(props){
    const name = props.match.params.name;
    const state = useSelector(state => state.recipesByQuery)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        async function get(name){
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
            <h3>Loading...</h3>}
          </>
    )
}