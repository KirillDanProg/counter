import React, {FC} from "react";
import {Button} from "./Button";
import styles from "../Counter.module.css"

type CounterControllersType = {
    count: number
    maxValue: number
    minValue: number
    incrementCount: () => void
    resetCount: () => void
}
export const CounterControllers: FC<CounterControllersType> = (props) => {
    const {count, maxValue, minValue} = props

    const increaseHandler = () => {
       props.incrementCount()
    }

    const resetHandler = () => {
        props.resetCount()
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

