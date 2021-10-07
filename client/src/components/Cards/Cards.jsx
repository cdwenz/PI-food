import React, { useMemo, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPage } from "../../Dispatch/actions";
import styles from './cards.module.css'

export default function Cards({value}){
    const recipes = useSelector(state => state[value]);
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    // const [page, setPage] = useState(1);
    // setPage(pageState)
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
        console.log('item ', item)
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
      
    return(
        <div>
            <div className={styles.btns}>
                { page === 1 
                ?   <button id="prev" onClick={(e) => displayPage(e)} disabled> PREV </button> 
                :   <button id="prev" onClick={(e) => displayPage(e)}> PREV </button> }
                {
                    arr.map(page => 
                        <button id={page.page} onClick={(e) => displayPage(e)}>
                            {page.page}
                        </button>
                    )
                }
                { 
                page === arr.length 
                    ?   <button id="next" onClick={(e)=> displayPage(e)} disabled>NEXT</button> 
                    :   <button id="next" onClick={(e)=> displayPage(e)}>NEXT</button>
                }
            </div>
            <div className={styles.divCards}>
                {
                arr[page-1].data.map(e => 
                    <Link to={`/home/${e.id}`}>
                        <Card recipe={e} key={e.id}/>
                    </Link>)
                } 
            </div>
        </div>
    )
}