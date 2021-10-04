import { useState } from "react"
import { getRecipeQuery} from "../../Back/actions";
import {useDispatch, useSelector} from "react-redux"
import Cards from "../Cards/Cards";

export default function Home(){
  const [select, setSelect] = useState("");
  const dispatch = useDispatch();
  
  function handleChange(e){
    setSelect(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(getRecipeQuery(select))
  }
  function displayPages(){
    document.getElementById('check').checked === false?
    document.getElementById('cards1').style.display = 'block'
    : document.getElementById('cards1').style.display = 'none'
  }
  const state = useSelector(state => state.recipes)
  console.log(state)
    return (
      <>
      <header>
        <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Receta: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={select}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
          
        </form>
        <input type='checkbox' id='check' onChange={displayPages}/>
      </header>
      <div id='cards1' style={{display:'none'}}>
        <Cards />
      </div>
      </>
    )
}