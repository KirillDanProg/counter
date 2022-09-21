import React from 'react';
import {CounterSettingsContainer} from "./components/CoounterSettings/CounterSettingsContainer";
import "./App.css"
import {CounterBox } from "./components/Counter/CounterBox";

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

                <CounterBox  />

                <CounterSettingsContainer/>

            </div>
        </div>


    );
}

export default App;
