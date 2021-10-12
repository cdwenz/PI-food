import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../Dispatch/actions";
import styles from "./paginate.module.css"

export function Paginate({arr, value}){
    const page = useSelector(state=> state.page[value]);
    const dispatch = useDispatch();
  
    function displayPage(e){
        e.preventDefault();

        if(e.target.id === 'prev') {
            dispatch(setPage({page: page - 1, value}));
        }else if(e.target.id === 'next') {
            dispatch(setPage({page: page + 1,value}));
        } else dispatch(setPage({page: parseInt(e.target.id), value}))
    }

    return(
        <div className={styles.divPaginate}>
        { page === 1 
        ?   <button className={styles.prev} id="prev" onClick={(e) => displayPage(e)} disabled> PREV </button> 
        :   <button className={styles.prev} id="prev" onClick={(e) => displayPage(e)}> PREV </button> }
        {
            arr.map((page,index) => 
                <button key={index} id={page.page}  className={styles.btns} onClick={(e) => displayPage(e)}>
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