import React, {FC} from "react";
import styles from "./Counter.module.css"

type CounterTotalType = {
    count: number
}
export const CounterTotal: FC<CounterTotalType> = ({count}) => {

    return (
        <div className={`${styles.total} ${count >= 5 ? styles.totalMax : ""}`}>
            {count}
        </div>
    )
}