import styles from "../Counter.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {setMaxValueAC} from "../../store/reducer/counterReducer";

export const MaxValue = () => {

    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)
    const dispatch = useDispatch()

    const changeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const max = JSON.parse(e.currentTarget.value)
       dispatch(setMaxValueAC(max))
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