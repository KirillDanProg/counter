import React, {FC} from "react";
import {Button} from "./Button";
import styles from "./Counter.module.css"

type CounterControllersType = {
    count: number
    setCount: (n: number) => void
    resetCount: (n: number) => void
}
export const CounterControllers: FC<CounterControllersType> = ({setCount, count, resetCount}) => {

    const increaseHandler = () => {
        setCount(count++)
    }

    const resetHandler = () => {
        resetCount(0)
    }

    return (

        <div className={styles.btnContainer}>
            <Button title={"inc"} callback={increaseHandler} disabled={count >= 5}
                    className={`${styles.btn} ${count >= 5 ? styles.disabled : ""}`}/>
            <Button title={"reset"} callback={resetHandler} disabled={count < 1}
                    className={`${styles.btn} ${count < 1 ? styles.disabled : ""}`}/>
        </div>

    )
}

