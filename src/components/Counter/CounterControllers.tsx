import React, {FC, useCallback} from "react";
import {Button} from "./Button";
import styles from "../Counter.module.css"
import {incrementAC, resetCountAC} from "../../store/reducer/counterReducer";
import {useAppDispatch} from "../../hooks/hooks";

type CounterControllersPropsType = {
    maxValue: number
    minValue: number
    count: number
}
export const CounterControllers: FC<CounterControllersPropsType>= React.memo((props) => {

    const {count, maxValue, minValue} = props

    const dispatch = useAppDispatch()

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

