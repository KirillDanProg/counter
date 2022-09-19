import styles from "../Counter.module.css";
import React, {FC} from "react";
import {CounterControllers} from "./CounterControllers";
import {CounterTotal} from "./CounterTotal";
import {CounterBoxContainerPropsType} from "./CounterBoxContainer";


export const CounterBox: FC<CounterBoxContainerPropsType> = (props) => {
    const {counter, incrementCount, resetCount} = props

    return (
        <div className={`${styles.innerContainer}  ${counter.count >= counter.maxValue ? styles.contHit : ""}`}>
            <div className={styles.mainContent}>
                <CounterTotal count={counter.count}
                              maxValue={counter.maxValue}
                />
            </div>

            <div className={styles.secondaryContent}>
                <CounterControllers count={counter.count}
                                    incrementCount={incrementCount}
                                    resetCount={resetCount}
                                    maxValue={counter.maxValue}
                                    minValue={counter.minValue}
                />
            </div>
        </div>
    )
}

