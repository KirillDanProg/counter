import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {incrementAC, resetCountAC} from "../../store/reducer/counterReducer";
import {CounterBox} from "./CounterBox";
import {RootState} from "../../store/store";

export type CounterBoxContainerPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>


const mapStateToProps = (state: RootState) => {
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        incrementCount: () => {
            dispatch(incrementAC())
        },
        resetCount: () => {
            dispatch(resetCountAC())
        }
    }
}
export const CounterBoxContainer = connect(mapStateToProps, mapDispatchToProps)(CounterBox)

