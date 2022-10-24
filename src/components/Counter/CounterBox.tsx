import styles from "../Counter.module.css";
import React, {useEffect} from "react";
import {CounterControllers} from "./CounterControllers";
import {CounterTotal} from "./CounterTotal";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {useAppDispatch} from "../../hooks/hooks";
import {getCountTC, getLocalStorageValuesTC, setCountTC} from "../../store/reducer/counterReducer";

export const CounterBox = React.memo(() => {
    const minValue = useSelector<RootState, number>(state => state.counter.minValue)
    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)
    const count = useSelector<RootState, number>(state => state.counter.count)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getLocalStorageValuesTC())
    }, [])

    useEffect(() => {
        dispatch(getCountTC())
    }, [])

    useEffect(() => {
        dispatch(setCountTC())
    }, [count])

    return (
        <div className={`${styles.innerContainer}  ${count >= maxValue ? styles.contHit : ""}`}>
            <div className={styles.mainContent}>
                <CounterTotal count={count} maxValue={maxValue}/>
            </div>

            <div className={styles.secondaryContent}>
                <CounterControllers count={count} maxValue={maxValue} minValue={minValue}/>
            </div>
        </div>
    )
})

