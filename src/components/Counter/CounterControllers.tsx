import React, {FC, useCallback} from "react";
import {Button} from "./Button";
import styles from "../Counter.module.css"
import {useDispatch} from "react-redux";
import {incrementAC, resetCountAC} from "../../store/reducer/counterReducer";

type CounterControllersPropsType = {
    maxValue: number
    minValue: number
    count: number
}
export const CounterControllers: FC<CounterControllersPropsType>= React.memo((props) => {

    const {count, maxValue, minValue} = props

    console.log("Counter controllers")

    const dispatch = useDispatch()


    const increaseHandler = useCallback(() => {
        dispatch(incrementAC())
    }, [dispatch])
    const resetHandler = useCallback(() => {
        dispatch(resetCountAC())
    }, [dispatch])

    return (

        <div className={styles.btnContainer}>
            <Button title={"inc"} callback={increaseHandler} disabled={count >= maxValue}
                    className={`${styles.btn} ${count >= maxValue ? styles.disabled : ""}`}/>
            <Button title={"reset"} callback={resetHandler} disabled={count <= minValue}
                    className={`${styles.btn} ${count <= minValue ? styles.disabled : ""}`}/>
        </div>

    )
})

