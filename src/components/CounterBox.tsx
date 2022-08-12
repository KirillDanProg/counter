import styles from "./Counter.module.css";
import React, {FC} from "react";
import {CounterTotal} from "./CounterTotal";
import {CounterControllers} from "./CounterControllers";


type CounterBoxType = {
    count: number
    setCount: (n: number) => void
    resetCount: (n: number) => void
}

export const CounterBox: FC<CounterBoxType> = ({count, setCount, resetCount}) => {
    return (
        <div className={styles.innerContainer}>

            <CounterTotal count={count}/>

            <CounterControllers count={count}
                                setCount={setCount}
                                resetCount={resetCount}
            />

        </div>
    )
}

