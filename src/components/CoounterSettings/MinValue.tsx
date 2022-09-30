import styles from "../Counter.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {setErrorAC, setMinValueAC} from "../../store/reducer/counterReducer";

export const MinValue = () => {

    const minValue = useSelector<RootState, number>(state => state.counter.minValue)
    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)

    const dispatch = useDispatch()

    const changeStartValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const min = JSON.parse(e.currentTarget.value)
        if (min > maxValue) {
            dispatch(setErrorAC(true))
        } else {
            dispatch(setMinValueAC(min))
            dispatch(setErrorAC(false))
        }

    }

    return (
        <label className={styles.setInputLabel}>
            Min value:
            <input value={minValue}
                   onChange={changeStartValueHandler}
                   className={`${styles.setInput} `} type={"number"}
            />
        </label>
    )

};