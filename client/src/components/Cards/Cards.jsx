import React, { useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

export default function Cards(){

    const [page, setPage] = useState(1)
    const recipes = useSelector(state => state.recipes);
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
        document.getElementsByName('page'+page)[0].style.display = 'none';
        document.getElementsByName('page'+e.target.id)[0].style.display = 'block';
        setPage(e.target.id)
    }

    return(
        <div>
            {
                arr.map(page => 
                <button id={page.page} onClick={displayPage}>
                    {page.page}
                </button>
            )
            }
            {
                arr.map((e) => 
                    <div name={'page'+ e.page} style = {e.page === 1 ? {display: 'block'} : {display: 'none'}}>
                        
                            {e.data.map(recipe =>  <Card 
                    recipe={recipe}
                    key={recipe.id}
                    page = {e.page}/>)
                }
                    </div>             
                
                )
            }
        </div>
    )
}