import React, {FC, useCallback} from "react";
import {Button} from "./Button";
import styles from "../Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {incrementAC, resetCountAC} from "../../store/reducer/counterReducer";

export const CounterControllers = () => {

    console.log("Counter controllers")

    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)
    const minValue = useSelector<RootState, number>(state => state.counter.minValue)
    const count = useSelector<RootState, number>(state => state.counter.count)
    const dispatch = useDispatch()


    const increaseHandler = () => {
        dispatch(incrementAC())
    }
    const resetHandler = () => {
        dispatch(resetCountAC())
    }

    return (

        <div className={styles.btnContainer}>
            <Button title={"inc"} callback={increaseHandler} disabled={count >= maxValue}
                    className={`${styles.btn} ${count >= maxValue ? styles.disabled : ""}`}/>
            <Button title={"reset"} callback={resetHandler} disabled={count <= minValue}
                    className={`${styles.btn} ${count <= minValue ? styles.disabled : ""}`}/>
        </div>

    )
}

