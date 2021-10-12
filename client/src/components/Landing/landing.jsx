import React from "react";
import styles from "./landing.module.css";
import {NavLink} from "react-router-dom"
import { useSelector } from "react-redux";

export default function Landing(){
       const state = useSelector(state => state)
    return (
        
        <div className={styles.app}>
            <div className={styles.bkg} />
            <div className={styles.container}>
                {/* <img src="../../img/loading-14.gif" alt="" /> */}
                <span className={styles.span1}>Welcome to eCook</span>
                <span className={styles.span2}>Recipes, diets & more </span>
                <div className={styles.row}><span className={styles.btn}>
                {
                    state.serverDown
                    ?
                    <span>Server Down</span>
                    :
                    <NavLink to="/home" style={{color: 'black', textDecoration: 'none'}}>
                    START
                    </NavLink>
                }
                </span>
                </div>
            </div>
        </div>
    )
}