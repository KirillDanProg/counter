import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducer/counterReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["counter"]
}

const rootReducer = combineReducers({
    counter: counterReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootState = ReturnType<typeof store.getState>
export const store = createStore(persistedReducer)

export let persistor = persistStore(store)




