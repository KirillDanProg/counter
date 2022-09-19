import styles from "../Counter.module.css";
import React, {ChangeEvent, FC} from "react";

type MinValuePropsType = {
    minValue: number
    changeMinValue: (min: number) => void
    error: boolean
}
export const MinValue: FC<MinValuePropsType> = (props) => {

    const changeStartValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const min = JSON.parse(e.currentTarget.value)
        props.changeMinValue(min)
    }

    return (
        <label className={styles.setInputLabel}>
            Min value:
            <input value={props.minValue}
                   onChange={changeStartValueHandler}
                   className={`${styles.setInput} `} type={"number"}
            />
        </label>
    )

};