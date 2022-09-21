import React, {FC} from "react";
import styles from "../Counter.module.css"
import {MaxValue} from "./MaxValue";
import {MinValue} from "./MinValue";

type CounterSettingsPropsType = {
    setMinValue: (minValue: number) => void
    setMaxValue: (maxValue: number) => void
    setError: (e: boolean) => void
    setErrorMessage: (errorMessage: string) => void
    minValue: number
    maxValue: number
    error: boolean
    errorMessage: string
}
export const CounterSettings: FC<CounterSettingsPropsType> = React.memo((props) => {

    console.log("Settings")

    const {setMaxValue, setMinValue, setError, setErrorMessage, minValue, maxValue, error, errorMessage} = props

    const changeMaxValueHandler = (max: number) => {
        if (max < minValue) {
            setError(true)
            setErrorMessage("value should be greater than minValue")
        } else {
            setError(false)
            setMaxValue(max)
        }

    }
    const changeStartValueHandler = (min: number) => {
        if (min > maxValue) {
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

                <MaxValue maxValue={maxValue} error={error} changeMaxValue={changeMaxValueHandler}/>


                <MinValue minValue={minValue} changeMinValue={changeStartValueHandler} error={error}/>

                {error ? <div className={styles.errorMessage}>{errorMessage}</div> : ""}
            </div>
        </div>
    )
});


