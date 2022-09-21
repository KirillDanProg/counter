import React, {FC, useCallback} from "react";
import {Button} from "./Button";
import styles from "../Counter.module.css"

type CounterControllersType = {
    isMax: boolean
    isMin: boolean
    incrementCount: () => void
    resetCount: () => void
}
export const CounterControllers: FC<CounterControllersType> = React.memo((props) => {

    console.log("Counter controllers")

    const {isMin, isMax} = props

    const increaseHandler = useCallback(() => {
       props.incrementCount()
    }, [])

    const resetHandler = useCallback(() => {
        props.resetCount()
    },[props.resetCount])

    return (

        <div className={styles.btnContainer}>
            <Button title={"inc"} callback={increaseHandler} disabled={isMax}
                    className={`${styles.btn} ${isMax ? styles.disabled : ""}`}/>
            <Button title={"reset"} callback={resetHandler} disabled={isMin}
                    className={`${styles.btn} ${isMin ? styles.disabled : ""}`}/>
        </div>

    )
})

