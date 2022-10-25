import React, {FC} from "react";
import styles from "../Counter.module.css"

type CounterTotalPropsType = {
    count: number
    maxValue: number
}

export const CounterTotal: FC<CounterTotalPropsType>= React.memo((props) => {
    const {count, maxValue} = props

    return (
        <div className={`${styles.total} ${count >= maxValue ? styles.totalMax : ""}`}>
            {count}
        </div>
    )
})