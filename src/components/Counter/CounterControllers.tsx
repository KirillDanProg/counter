import React, {FC} from "react";
import {Button} from "@mui/material";
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
        setCount(1)
    }
    const resetHandler = () => {
        resetCount()
    }
    const decrementHandler = () => {
        setCount(-1)
    }

    return (

        <div className={styles.btnContainer}>
            <Button variant={"outlined"}
                    onClick={increaseHandler}
                    disabled={count >= maxValue}>
                Increment
            </Button>
            <Button variant={"outlined"}
                    onClick={decrementHandler}
                    disabled={count <= startValue}>
                Decrement
            </Button>
            <Button variant={"outlined"}
                    onClick={resetHandler}>
                Reset
            </Button>

        </div>

    )
}

