import {StateType} from "../App";

type ActionsType = incrementACType | resetCounterACType | setMaxValueACType | setStartValueACType

type incrementACType = ReturnType<typeof incrementAC>
type resetCounterACType = ReturnType<typeof resetCountAC>
type setMaxValueACType = ReturnType<typeof setMaxValueAC>
type setStartValueACType = ReturnType<typeof setStartValueAC>

const COUNT_INC = "COUNT-INC"
const RESET_COUNT = "RESET-COUNT"
const SET_MAX_VALUE = "SET-MAX-VALUE"
const SET_START_VALUE = "SET-START-VALUE"

export const counterReducer = (state: StateType, action: ActionsType) => {
    switch (action.type) {
        case COUNT_INC:
            return {...state, count: state.count + action.payload.n}
        case RESET_COUNT:
            return {...state, count: 0}
        case SET_MAX_VALUE:
            return {...state, maxValue: action.payload.maxValue}
        case SET_START_VALUE:
            return {...state, startValue: action.payload.minValue}
        default:
            return state
    }
}


export const incrementAC = (n: number) => {
    return {
        type: COUNT_INC,
        payload: {
            n
        }
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
export const setStartValueAC = (minValue: number) => {
    return {
        type: SET_START_VALUE,
        payload: {
            minValue
        }
    } as const
}