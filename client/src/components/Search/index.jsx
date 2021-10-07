import { useSelector } from "react-redux"
import Cards from "../Cards/Cards"


export default function Search(){
    const state = useSelector(state => state.recipesByQuery)
 
    return (
        <>
            {Array.isArray(state) ? <Cards value='recipesByQuery'/> : <h3>Loading...</h3>}
            
        </>
    )
}