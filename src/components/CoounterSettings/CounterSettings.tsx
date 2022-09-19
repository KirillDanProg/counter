import React, {FC} from "react";
import styles from "../Counter.module.css"
import {CounterSettingsContainerPropsType} from "./CounterSettingsContainer";
import {MaxValue} from "./MaxValue";
import {MinValue} from "./MinValue";


export const CounterSettings: FC<CounterSettingsContainerPropsType> = (props) => {

    const {setMaxValue, setMinValue, counter, setError, setErrorMessage} = props

    const changeMaxValueHandler = (max: number) => {
        if (max < counter.minValue) {
            setError(true)
            setErrorMessage("value should be greater than minValue")
        } else {
            setError(false)
            setMaxValue(max)
        }

    }
    const changeStartValueHandler = (min: number) => {
        if (min > counter.maxValue) {
            setError(true)
            setErrorMessage("value should be less than maxValue ")
        } else if (min < 0) {
            setError(true)
            setErrorMessage("only positive number is available")
        } else {
            setError(false)
            setMinValue(min)
        }
    }
    return (
        <div className={styles.innerContainer}>
            <div className={styles.mainContent}>

                <MaxValue maxValue={counter.maxValue} error={counter.error} changeMaxValue={changeMaxValueHandler}/>


                <MinValue minValue={counter.minValue} changeMinValue={changeStartValueHandler} error={counter.error}/>

                {counter.error ? <div className={styles.errorMessage}>{counter.errorMessage}</div> : ""}
            </div>
        </div>
    )
};


