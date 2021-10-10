import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../Dispatch/actions";
import styles from "./paginate.module.css"

export function Paginate(){
    const page = useSelector(state=> state.page);
    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();
    const num = 9;
    let arr = [];
    const pages =  Math.ceil(recipes.length / num);
  
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

    return(
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
    )
}