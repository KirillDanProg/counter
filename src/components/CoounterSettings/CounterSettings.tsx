import React from "react";
import styles from "../Counter.module.css"
import {MaxValue} from "./MaxValue";
import {MinValue} from "./MinValue";
import { setLocalStorageValuesTC} from "../../store/reducer/counterReducer";
import {useAppDispatch} from "../../hooks/hooks";



export const CounterSettings = React.memo(() => {

    const dispatch = useAppDispatch()

    const setValuesHandler = () => {
        dispatch(setLocalStorageValuesTC())
    }

    return (
        <div className={styles.innerContainer}>
            <div className={styles.mainContent}>

                <MaxValue/>


                <MinValue/>

                <button onClick={setValuesHandler}>set</button>

            </div>
        </div>
    )
});


