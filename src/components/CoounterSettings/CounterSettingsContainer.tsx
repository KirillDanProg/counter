import React from "react";
import {connect} from "react-redux";
import {CounterSettings} from "./CounterSettings";
import {RootState} from "../../store/store";
import {Dispatch} from "redux";
import {setErrorAC, setErrorMessageAC, setMaxValueAC, setMinValueAC} from "../../store/reducer/counterReducer";

export type CounterSettingsContainerPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
const mapStateToProps = (state: RootState) => {
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setMaxValue: (maxValue: number) => {
            dispatch(setMaxValueAC(maxValue))
        },
        setMinValue: (minValue: number) => {
            dispatch(setMinValueAC(minValue))
        },
        setError: (e: boolean) => {
            dispatch(setErrorAC(e))
        },
        setErrorMessage: (errorMessage: string) => {
            dispatch(setErrorMessageAC(errorMessage))
        }

    }
}
export const CounterSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(CounterSettings)