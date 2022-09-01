import styles from "../Counter.module.css";
import React, {FC} from "react";
import {CounterControllers} from "./CounterControllers";
import {CounterTotal} from "./CounterTotal";


type CounterBoxType = {
    count: number
    setCount: (n: number) => void
    resetCount: () => void
    maxValue: number
    startValue: number
}

export const CounterBox: FC<CounterBoxType> = (props) => {
    const {count, setCount, resetCount, maxValue, startValue} = props

    return (
        <div className={`${styles.innerContainer}  ${count >= maxValue ? styles.contHit : ""}`}>
            <div className={styles.mainContent}>
                <CounterTotal count={count}
                              maxValue={maxValue}
                />
            </div>

            <div className={styles.secondaryContent}>
                <CounterControllers count={count}
                                    setCount={setCount}
                                    resetCount={resetCount}
                                    maxValue={maxValue}
                                    startValue={startValue}
                />
            </div>
        </div>
    )
}

