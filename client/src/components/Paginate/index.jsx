import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../Dispatch/actions";
import styles from "./paginate.module.css"

export function Paginate({arr}){
    const page = useSelector(state=> state.page);
    const dispatch = useDispatch();
  
    function displayPage(e){
        e.preventDefault();
        if(e.target.id === 'prev') {
            dispatch(setPage(page - 1));
        }else if(e.target.id === 'next') {
            dispatch(setPage(page + 1));
        } else dispatch(setPage(parseInt(e.target.id)))
    }

    return(
        <div className={styles.divPaginate}>
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