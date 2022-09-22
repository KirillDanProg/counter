import React from "react";
import styles from "../Counter.module.css"
import {MaxValue} from "./MaxValue";
import {MinValue} from "./MinValue";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";


export const CounterSettings = React.memo(() => {

    console.log("Settings")

    const error = useSelector<RootState, boolean>(state => state.counter.error)
    const errorMessage = useSelector<RootState, string>(state => state.counter.errorMessage)

    return (
        <div className={styles.innerContainer}>
            <div className={styles.mainContent}>

                <MaxValue/>


                <MinValue/>

                {error ? <div className={styles.errorMessage}>{errorMessage}</div> : ""}
            </div>
        </div>
    )
});


