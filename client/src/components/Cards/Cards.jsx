import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from './cards.module.css'
import { Paginate } from "../Paginate";
import { Filtered } from "../filtered/filtered";


export default function Cards({value}){
    
    const page = useSelector(state => state.page[value]);
    const recipes = useSelector(state => state[value]);
    
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
     
    return(
        <div className={styles.divContain}>
            <Filtered value={value}/>
            <div className={styles.divCards}>
                {
                    arr.length > 0
                    ?
                    arr[page-1].data.map((e,index) => 
                    <Link to={`/home/${e.id}`} key={index} className={styles.link}>
                            <Card recipe={e}/>
                        </Link>)
                    :
                    <h1>No Matches</h1>
                } 
            </div>
                <Paginate arr={arr} value={value}/>
        </div>
    )
}
