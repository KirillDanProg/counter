import styles from "../Counter.module.css";
import React, {FC} from "react";

type MaxValuePropsType = {
    maxValue: number
    changeMaxValue: (max: number) => void
    error: boolean
}
export const MaxValue: FC<MaxValuePropsType> = ({maxValue, changeMaxValue, ...props}) => {

    const changeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const max = JSON.parse(e.currentTarget.value)
        changeMaxValue(max)
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