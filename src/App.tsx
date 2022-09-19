import React from 'react';
import {CounterBoxContainer} from "./components/Counter/CounterBoxContainer";
import {CounterSettingsContainer} from "./components/CoounterSettings/CounterSettingsContainer";
import "./App.css"

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

                <CounterBoxContainer/>

                <CounterSettingsContainer/>

            </div>
        </div>


    );
}

export default App;
