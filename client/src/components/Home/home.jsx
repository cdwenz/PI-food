import { useState } from "react"
import { getRecipeQuery} from "../../Dispatch/actions";
import {useDispatch, useSelector} from "react-redux"
import Cards from "../Cards/Cards";
import styles from './home.module.css'

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