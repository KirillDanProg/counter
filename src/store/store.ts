import {AnyAction, applyMiddleware, combineReducers,  legacy_createStore as createStore} from "redux";
import {counterReducer} from "./reducer/counterReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk, {ThunkAction} from "redux-thunk";

//
// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ["counter"]
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)


const rootReducer = combineReducers({
    counter: counterReducer
})



// type for all app
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    any,
    RootState,
    unknown,
    any
    >

export const store = createStore(rootReducer, applyMiddleware(thunk))





