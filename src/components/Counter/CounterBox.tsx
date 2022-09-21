import styles from "../Counter.module.css";
import React from "react";
import {CounterControllers} from "./CounterControllers";
import {CounterTotal} from "./CounterTotal";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {StateType} from "../../App";
import {incrementAC, resetCountAC} from "../../store/reducer/counterReducer";


export const CounterBox = () => {

    const {count, maxValue, minValue} = useSelector<RootState, StateType>(state => state.counter)
    const dispatch = useDispatch()

    const incrementCount = () => {
        dispatch(incrementAC())
    }
    const resetCount = () => {
        dispatch(resetCountAC())
    }


    return (
        <div className={`${styles.innerContainer}  ${count >= maxValue ? styles.contHit : ""}`}>
            <div className={styles.mainContent}>
                <CounterTotal count={count}
                              maxValue={maxValue}
                />
            </div>

            <div className={styles.secondaryContent}>
                <CounterControllers count={count}
                                    incrementCount={incrementCount}
                                    resetCount={resetCount}
                                    maxValue={maxValue}
                                    minValue={minValue}
                />
            </div>
        </div>
    )
}

