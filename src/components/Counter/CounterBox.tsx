import styles from "../Counter.module.css";
import React, {FC, useCallback} from "react";
import {CounterControllers} from "./CounterControllers";
import {CounterTotal} from "./CounterTotal";

type CounterBoxPropsType = {
    count: number
    isMax: boolean
    isMin: boolean
    incrementCount: () => void
    resetCount: () => void
}
export const CounterBox: FC<CounterBoxPropsType> = React.memo((props) => {

    const {count, incrementCount, resetCount, isMax, isMin} = props
    const x = useCallback(incrementCount, [])
    const y = useCallback(resetCount, [])

    console.log("CounterBox")

    return (
        <div className={`${styles.innerContainer}  ${isMax ? styles.contHit : ""}`}>
            <div className={styles.mainContent}>
                <CounterTotal count={count}
                              isMax={isMax}
                />
            </div>

            <div className={styles.secondaryContent}>
                <CounterControllers incrementCount={x}
                                    resetCount={y}
                                    isMax={isMax}
                                    isMin={isMin}
                />
            </div>
        </div>
    )
})

