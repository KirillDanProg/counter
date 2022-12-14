import {StateType} from "../../App";
import {Dispatch} from "redux";
import {AppThunk} from "../store";

type ActionsType = incrementACType |
    resetCounterACType |
    setMaxValueACType |
    setMinValueACType |
    setErrorACType |
    setErrorMessageACType |
    getCountACType |
    getValuesACType

type incrementACType = ReturnType<typeof incrementAC>
type resetCounterACType = ReturnType<typeof resetCountAC>
type setMaxValueACType = ReturnType<typeof setMaxValueAC>
type setMinValueACType = ReturnType<typeof setMinValueAC>
type setErrorACType = ReturnType<typeof setErrorAC>
type setErrorMessageACType = ReturnType<typeof setErrorMessageAC>
type getValuesACType = ReturnType<typeof getValuesAC>
type getCountACType = ReturnType<typeof getCountAC>

const COUNT_INC = "COUNT-INC"
const RESET_COUNT = "RESET-COUNT"
const SET_MAX_VALUE = "SET-MAX-VALUE"
const SET_MIN_VALUE = "SET-MIN-VALUE"
const SET_ERROR = "SET-ERROR"
const SET_ERROR_MESSAGE = "SET-ERROR-MESSAGE"

export const initialState = {
    count: 0,
    maxValue: 4,
    minValue: 0,
    error: false,
    errorMessage: ""
} as StateType

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "GET-VALUES":
            return {
                ...state,
                minValue: action.values.minValue,
                maxValue: action.values.maxValue
            }
        case "GET-COUNT":
            return {
                ...state, count: action.count
            }
        case COUNT_INC:
            return {...state, count: state.count + 1}
        case RESET_COUNT:
            return {...state, count: state.minValue}
        case SET_MAX_VALUE:
            return {...state, maxValue: action.payload.maxValue}
        case SET_MIN_VALUE:
            return {...state, minValue: action.payload.minValue}
        case  SET_ERROR:
            return {...state, error: action.e}
        case  SET_ERROR_MESSAGE:
            return {...state, errorMessage: action.errorMessage}
        default:
            return state
    }
}
export const getCountAC = (count: number) => ({type: "GET-COUNT", count} as const)
export const incrementAC = () => {
    return {
        type: COUNT_INC,
    } as const
}
export const resetCountAC = () => {
    return {
        type: RESET_COUNT
    } as const
}
export const setMaxValueAC = (maxValue: number) => {
    return {
        type: SET_MAX_VALUE,
        payload: {
            maxValue
        }
    } as const
}
export const setMinValueAC = (minValue: number) => {
    return {
        type: SET_MIN_VALUE,
        payload: {
            minValue
        }
    } as const
}
export const setErrorAC = (e: boolean) => {
    return {
        type: SET_ERROR,
        e
    } as const
}
export const setErrorMessageAC = (errorMessage: string) => {
    return {
        type: SET_ERROR_MESSAGE,
        errorMessage
    } as const
}
export const getValuesAC = (values: LocalStorageValuesType) => ({type: "GET-VALUES", values} as const)

//THUNK

export const getCountTC = (): AppThunk => (dispatch) => {
    const count = localStorage.getItem("count")
    count && dispatch(getCountAC(JSON.parse(count)))
}
export const setCountTC = (): AppThunk => (dispatch, getState) => {
    const count = getState().counter.count
    localStorage.setItem("count", JSON.stringify(count))
}


export const getLocalStorageValuesTC = () => (dispatch: Dispatch) => {
    const values = localStorage.getItem("values")
    values && dispatch(getValuesAC(JSON.parse(values)))
}


export type LocalStorageValuesType = {
    maxValue: number
    minValue: number
}

export const setLocalStorageValuesTC = (): AppThunk => (dispatch, getState) => {
    const maxValue = getState().counter.maxValue
    const minValue = getState().counter.minValue
    localStorage.setItem("values", JSON.stringify({
        minValue,
        maxValue
    }))
}

