import React from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { order, orderByDiet, orderScore, setPage } from "../../Dispatch/actions";
import styles from './cards.module.css'


export default function Cards({value}){
    const page = useSelector(state => state.page);
    const diets = useSelector(state => state.diets);
    const recipes = useSelector(state => state[value]);
 
    const dispatch = useDispatch();

    const num = 9
    let arr = [];
    const pages =  Math.ceil(recipes.length / num)
  for (let i = 0; i < pages; i ++) {
      let item = {};
      item.page = i+1;
      if (i === pages - 1) {
          item.data = recipes.slice(i*num);
      } else {
          item.data = recipes.slice(i*num, (i+1)*num);
      }
      arr.push(item);
    }
    function displayPage(e){
        e.preventDefault();
        if(e.target.id === 'prev') {
            dispatch(setPage(page - 1));
        }else if(e.target.id === 'next') {
            dispatch(setPage(page + 1));
        } else dispatch(setPage(parseInt(e.target.id)))
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
        document.getElementById('selectScore').selected = true
    }
    
    
    return(
        <div className={styles.divContain}>
            {/* <Paginate /> */}
            <div>
                { page === 1 
                ?   <button className={styles.prev} id="prev" onClick={(e) => displayPage(e)} disabled> PREV </button> 
                :   <button className={styles.prev} id="prev" onClick={(e) => displayPage(e)}> PREV </button> }
                {
                    arr.map(page => 
                        <button id={page.page}  className={styles.btns} onClick={(e) => displayPage(e)}>
                            {page.page}
                        </button>
                    )
                }
                { 
                page === arr.length 
                    ?   <button className={styles.next} id="next" onClick={(e)=> displayPage(e)} disabled>NEXT</button> 
                    :   <button className={styles.next} id="next" onClick={(e)=> displayPage(e)}>NEXT</button>
                }
            </div>
            <div>
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
                    <option value="none" selected disabled>Select Diet</option>
                    <option value="ALL">ALL</option>
                {
                    diets.length > 0
                    ?
                        diets.map((e) => {
                            return <option value={e}>{e}</option>
                        })
                    :
                        <h3>diets</h3>
                }
                </select>
            </div>
            <div className={styles.divCards}>
                {
                    arr.length > 0
                    ?
                    arr[page-1].data.map(e => 
                        <Link to={`/home/${e.id}`} className={styles.link}>
                            <Card recipe={e} key={e.id}/>
                        </Link>)
                    :
                    <h1>No hay tarjetas</h1>
                } 
            </div>
        </div>
    )
}
