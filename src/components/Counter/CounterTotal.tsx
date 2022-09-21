import React, {FC} from "react";
import styles from "../Counter.module.css"

type CounterTotalType = {
    count: number
    isMax: boolean
}
export const CounterTotal: FC<CounterTotalType> = React.memo(({count, isMax}) => {



    console.log("Total")

    return (
        <div className={`${styles.total} ${isMax ? styles.totalMax : ""}`}>
            {count}
        </div>
    )
})