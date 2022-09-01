import React, {FC} from "react";
import styles from "../Counter.module.css"
import {Button} from "@mui/material";
import {TextField} from "@mui/material";


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

export const CounterSettings: FC<CounterSettingsType> = (props) => {

    const {maxValue, setMaxValue, startValue, setStartValue, applySettings, disabled, setDisabled} = props

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
                <TextField value={maxValue}
                           color="secondary"
                           onChange={changeMaxValueHandler}
                           type={"number"}
                           label={"Max value:"}
                />
                <TextField value={startValue}
                           color="secondary"
                           onChange={changeStartValueHandler}
                           type={"number"}
                           label={"Start value:"}
                />
            </div>
            <div className={styles.secondaryContent}>
                <Button variant={"outlined"}
                        onClick={applySettings}
                        disabled={disabled}>
                    Set
                </Button>

            </div>
        </div>
    )
};