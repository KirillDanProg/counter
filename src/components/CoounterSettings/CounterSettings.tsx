import React, {FC} from "react";
import styles from "../Counter.module.css"
import {Button} from "../Counter/Button";

export type CounterSettingsType = {
    maxValue: number
    setMaxValue: (newMaxValue: number) => void
    startValue: number
    setStartValue: (newStartValue: number) => void
    applySettings: () => void
    disabled: boolean
    setDisabled: (isDis: boolean) => void
    error: boolean
}

export const CounterSettings: FC<CounterSettingsType> = ({
                                                             maxValue, setMaxValue, startValue, error,
                                                             setStartValue, applySettings, disabled, setDisabled
                                                         }) => {

    const changeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDisabled(false)
        setMaxValue(JSON.parse(e.currentTarget.value))
    }

    const changeStartValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDisabled(false)
        setStartValue(JSON.parse(e.currentTarget.value))
    }
    return (
        <div className={styles.innerContainer}>
            <div className={styles.mainContent}>
                <label className={styles.setInputLabel}>
                    Max value:
                    <input value={maxValue}
                           onChange={changeMaxValueHandler}
                           className={styles.setInput} type={"number"}/>
                </label>
                <label className={styles.setInputLabel}>
                    Start value:
                    <input value={startValue}
                           onChange={changeStartValueHandler}
                           className={`${styles.setInput} ${error ? styles.error : ''}`} type={"number"}
                    />
                </label>
                {error ? <div className={styles.errorMessage}>Only positive number is available</div> : ""}
            </div>
            <div className={styles.secondaryContent}>
                <Button className={`${styles.btn} ${disabled ? styles.disabled : ""}`}
                        title={"set"}
                        callback={applySettings}
                        disabled={disabled}/>
            </div>
        </div>
    )
};