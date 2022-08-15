import React from 'react';
import styles from "./components/Counter.module.css"
import {CounterBox} from "./components/Counter/CounterBox";
import {CounterSettings} from "./components/CoounterSettings/CounterSettings";

function App() {


    const initialStartValue = () => {
        const localStartValue = localStorage.getItem("startValue")
        if (localStartValue) {
            return JSON.parse(localStartValue)
        }
        return 0
    }
    const [startValue, setStartValue] = React.useState(initialStartValue)

    const initialMaxValue = () => {
        const localMaxVal = localStorage.getItem("maxValue")
        if (localMaxVal) {
            return JSON.parse(localMaxVal)
        }
        return 0
    }
    const [maxValue, setMaxValue] = React.useState(initialMaxValue)

    const initialCountValue = () => {
        const localCountValue = localStorage.getItem("count")
        if(localCountValue) {
            return JSON.parse(localCountValue)
        } else {
            return 0
        }
    }
    const [count, setCount] = React.useState(initialCountValue)

    const [disabled, setDisabled] = React.useState(true)

    const [error, setError] = React.useState(false)

    const applySettings = () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
        setDisabled(true)
        setCount(startValue)
    }

    const incCountHandler = () => {
        setCount(count + 1)
    }
    const resetHandler = () => {
        setCount(startValue)
    }

    const setStartValueHandler = (newStartValue: number) => {
        setStartValue(newStartValue)
    }

    const setMaxValueHandler = (newMaxValue: number) => {
        setDisabled(false)
        setMaxValue(newMaxValue)
    }

    const setDisabledButtonsHandler = (isDisabled: boolean) => {
        setDisabled(isDisabled)
    }

    React.useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
    }, [count])

    React.useEffect(() => {
        if(startValue < 0) {
            setError(true)
            setDisabled(true)
        } else {
            setError(false)
        }
    }, [startValue])


    return (
        <div className={count >= 5 ? styles.box : ""}>
            <div className={`${styles.container}`}>

                <CounterBox count={count}
                            setCount={incCountHandler}
                            resetCount={resetHandler}
                            maxValue={maxValue}
                            startValue={startValue}
                />

                <CounterSettings maxValue={maxValue}
                                 setMaxValue={setMaxValueHandler}
                                 startValue={startValue}
                                 applySettings={applySettings}
                                 setStartValue={setStartValueHandler}
                                 disabled={disabled}
                                 setDisabled={setDisabledButtonsHandler}
                                 error={error}
                />

            </div>
        </div>

    );
}

export default App;
