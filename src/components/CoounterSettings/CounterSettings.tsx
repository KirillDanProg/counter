import React from "react";
import styles from "../Counter.module.css"
import {MaxValue} from "./MaxValue";
import {MinValue} from "./MinValue";



export const CounterSettings = React.memo(() => {

    console.log("Settings")

    return (
        <div className={styles.innerContainer}>
            <div className={styles.mainContent}>

                <MaxValue/>


                <MinValue/>

            </div>
        </div>
    )
});


