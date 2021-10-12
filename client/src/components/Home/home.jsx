import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { setPage } from "../../Dispatch/actions";
import Cards from "../Cards/Cards";

export default function Home(){
  
  
  const state = useSelector(state => state.recipes)
  
  return (
      <>
      {
        Array.isArray(state) 
      ?
        <Cards value='recipes'/>
      : 
        <h3>Loading...</h3>}
      </>
    )
}