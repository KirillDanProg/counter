import styles from "../Counter.module.css";
import React, {FC, useCallback} from "react";
import {CounterControllers} from "./CounterControllers";
import {CounterTotal} from "./CounterTotal";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

export const CounterBox = React.memo(() => {

    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)
    const count = useSelector<RootState, number>(state => state.counter.count)

    console.log("CounterBox")

    return (
        <div className={`${styles.innerContainer}  ${count <= maxValue ? styles.contHit : ""}`}>
            <div className={styles.mainContent}>
                <CounterTotal/>
            </div>

            <div className={styles.secondaryContent}>
                <CounterControllers />
            </div>
        </div>
    )
})

