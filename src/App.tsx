import React, {useCallback, useState} from 'react';
import "./App.css"
import {CounterBox} from "./components/Counter/CounterBox";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import {
    incrementAC,
    resetCountAC,
    setErrorAC,
    setErrorMessageAC,
    setMaxValueAC,
    setMinValueAC
} from "./store/reducer/counterReducer";
import {CounterSettings} from "./components/CoounterSettings/CounterSettings";

export type StateType = {
    minValue: number
    maxValue: number
    count: number
    error: boolean
    errorMessage: string
}

function App() {

    console.log("App")


    const {count, maxValue, minValue, errorMessage, error} = (useSelector<RootState, StateType>(state => state.counter))
    const dispatch = useDispatch()

    const [isMax, setIsMax] = useState(count === maxValue)
    const [isMin, setIsMin] = useState(count <= minValue)

        if(count === maxValue) {
           !isMax && setIsMax(true)
        } else {
            isMax && setIsMax(false)
        }

        if(count <= minValue) {
            !isMin && setIsMin(true)
        } else {
            isMin && setIsMin(false)
        }




    const incrementCountHandler = useCallback(() => {
        dispatch(incrementAC())
    }, [dispatch])
    const resetCountHandler = useCallback(() => {
        dispatch(resetCountAC())
    }, [dispatch])

    const setMaxValueHandler = useCallback((maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
    }, [dispatch])
    const setMinValueHandler = useCallback((minValue: number) => {
        dispatch(setMinValueAC(minValue))
    }, [dispatch])

    const setErrorHandler = useCallback((e: boolean) => {
        dispatch(setErrorAC(e))
    }, [dispatch])
    const setErrorMessageHandler = useCallback((errorMessage: string) => {
        dispatch(setErrorMessageAC(errorMessage))
    }, [dispatch])

    return (
        <div className={"wrapper"}>
            <div className={"counterBox"}>

                <CounterBox count={count}
                            incrementCount={incrementCountHandler}
                            resetCount={resetCountHandler}
                            isMin={isMin}
                            isMax={isMax}
                />

                <CounterSettings maxValue={maxValue}
                                 minValue={minValue}
                                 errorMessage={errorMessage} error={error}
                                 setErrorMessage={setErrorMessageHandler}
                                 setError={setErrorHandler}
                                 setMaxValue={setMaxValueHandler}
                                 setMinValue={setMinValueHandler}
                />

            </div>
        </div>


    );
}

export default App;
