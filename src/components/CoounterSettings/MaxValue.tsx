import styles from "../Counter.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {setErrorAC, setMaxValueAC} from "../../store/reducer/counterReducer";

export const MaxValue = () => {

    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)
    const minValue = useSelector<RootState, number>(state => state.counter.minValue)

    const dispatch = useDispatch()

    const changeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const max = JSON.parse(e.currentTarget.value)
        if(max < minValue) {
            dispatch(setErrorAC(true))
        } else {
            dispatch(setMaxValueAC(max))
            dispatch(setErrorAC(false))
        }
    }

    return (
        <label className={styles.setInputLabel}>
            Max value:
            <input value={maxValue}
                   onChange={changeMaxValueHandler}
                   className={`${styles.setInput}`} type={"number"}
            />
        </label>
    )
};