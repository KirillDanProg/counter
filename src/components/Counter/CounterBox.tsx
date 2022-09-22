import styles from "../Counter.module.css";
import React from "react";
import {CounterControllers} from "./CounterControllers";
import {CounterTotal} from "./CounterTotal";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

export const CounterBox = React.memo(() => {

    const minValue = useSelector<RootState, number>(state => state.counter.minValue)
    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)
    const count = useSelector<RootState, number>(state => state.counter.count)

    console.log("CounterBox")

    return (
        <div className={`${styles.innerContainer}  ${count >= maxValue ? styles.contHit : ""}`}>
            <div className={styles.mainContent}>
                <CounterTotal count={count} maxValue={maxValue}/>
            </div>

            <div className={styles.secondaryContent}>
                <CounterControllers count={count} maxValue={maxValue} minValue={minValue}/>
            </div>
        </div>
    )
})

