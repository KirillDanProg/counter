import React, {FC} from "react";
import {Button} from "./Button";
import styles from "../Counter.module.css"

type CounterControllersType = {
    count: number
    setCount: (n: number) => void
    resetCount: () => void
    maxValue: number
    startValue: number
}
export const CounterControllers: FC<CounterControllersType> = ({setCount, count, resetCount, maxValue, startValue}) => {

    const increaseHandler = () => {
        setCount(count++)
    }

    const resetHandler = () => {
        resetCount()
    }

    return (

        <div className={styles.btnContainer}>
            <Button title={"inc"} callback={increaseHandler} disabled={count >= maxValue}
                    className={`${styles.btn} ${count >= maxValue ? styles.disabled : ""}`}/>
            <Button title={"reset"} callback={resetHandler} disabled={count <= startValue}
                    className={`${styles.btn} ${count <= startValue ? styles.disabled : ""}`}/>
        </div>

    )
}

