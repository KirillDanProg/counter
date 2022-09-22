import React from "react";
import styles from "../Counter.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";


export const CounterTotal= React.memo(() => {
    console.log("Total")

    const count = useSelector<RootState, number>(state => state.counter.count)
    const max = useSelector<RootState, number>(state => state.counter.maxValue)

    return (
        <div className={`${styles.total} ${count >= max ? styles.totalMax : ""}`}>
            {count}
        </div>
    )
})