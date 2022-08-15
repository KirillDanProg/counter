import React, {FC} from "react";
import styles from "../Counter.module.css"

type CounterTotalType = {
    count: number
    maxValue: number
}
export const CounterTotal: FC<CounterTotalType> = ({count, maxValue}) => {

    return (
        <div className={`${styles.total} ${count >= maxValue ? styles.totalMax : ""}`}>
            {count}
        </div>
    )
}