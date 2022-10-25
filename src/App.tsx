import React, {useEffect} from 'react';
import "./App.css"
import {CounterBox} from "./components/Counter/CounterBox";
import {CounterSettings} from "./components/CoounterSettings/CounterSettings";


export type StateType = {
    minValue: number
    maxValue: number
    count: number
    error: boolean
    errorMessage: string
}

function App() {

    return (
        <div className={"wrapper"}>
            <div className={"counterBox"}>

                <CounterBox/>

                <CounterSettings/>

            </div>
        </div>


    );
}

export default App;
