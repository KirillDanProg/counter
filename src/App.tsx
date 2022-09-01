import React from 'react';
import styles from "./components/Counter.module.css"
import {CounterBox} from "./components/Counter/CounterBox";
import {CounterSettings} from "./components/CoounterSettings/CounterSettings";
import {counterReducer, incrementAC, resetCountAC, setMaxValueAC, setStartValueAC} from "./reducer/counterReducer";

export type StateType = {
    startValue: number
    maxValue: number
    count: number
}

function App() {
    const initialStartValue = () => {
        const localStartValue = localStorage.getItem("startValue")
        if (localStartValue) {
            return JSON.parse(localStartValue)
        }
        return 0
    }
    const initialMaxValue = () => {
        const localMaxVal = localStorage.getItem("maxValue")
        if (localMaxVal) {
            return JSON.parse(localMaxVal)
        }
        return 0
    }
    const initialCountValue = () => {
        const localCountValue = localStorage.getItem("count")
        if(localCountValue) {
            return JSON.parse(localCountValue)
        } else {
            return 0
        }
    }

    const initialCounterState = {
        startValue: initialStartValue(),
        maxValue: initialMaxValue(),
        count: initialCountValue()
    }

    const [state, dispatchCounter] = React.useReducer(counterReducer, initialCounterState)
    const [disabled, setDisabled] = React.useState(false)
    const [error, setError] = React.useState(false)

    const applySettings = () => {
        localStorage.setItem("maxValue", JSON.stringify(state.maxValue))
        localStorage.setItem("startValue", JSON.stringify(state.startValue))
        setDisabled(true)
    }

    const countHandler = (n: number) => {
        dispatchCounter(incrementAC(n))
    }
    const resetHandler = () => {
        dispatchCounter(resetCountAC())
    }

    const setStartValueHandler = (newStartValue: number) => {
        dispatchCounter(setStartValueAC(newStartValue))
    }

    const setMaxValueHandler = (newMaxValue: number) => {
        setDisabled(false)
        dispatchCounter(setMaxValueAC(newMaxValue))
    }

    const setDisabledButtonsHandler = (isDisabled: boolean) => {
        setDisabled(isDisabled)
    }

    React.useEffect(() => {
        localStorage.setItem("count", JSON.stringify(state.count))
    }, [state.count])

    React.useEffect(() => {
        if (state.startValue < 0) {
            setError(true)
            setDisabled(true)
        } else {
            setError(false)
        }
    }, [state.startValue])


    return (
        <div className={state.count >= 5 ? styles.box : ""}>
            <div className={`${styles.container}`}>

                <CounterBox count={state.count}
                            setCount={countHandler}
                            resetCount={resetHandler}
                            maxValue={state.maxValue}
                            startValue={state.startValue}
                />

                <CounterSettings maxValue={state.maxValue}
                                 setMaxValue={setMaxValueHandler}
                                 startValue={state.startValue}
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
