import styles from "../Counter.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {setMinValueAC} from "../../store/reducer/counterReducer";

export const MinValue = () => {

    const minValue = useSelector<RootState, number>(state => state.counter.minValue)
    const dispatch = useDispatch()

    const changeStartValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const min = JSON.parse(e.currentTarget.value)
        dispatch(setMinValueAC(min))
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