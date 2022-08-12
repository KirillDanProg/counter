import React from 'react';
import styles from "./components/Counter.module.css"
import {CounterBox} from "./components/CounterBox";

function App() {

    let [count, setCount] = React.useState<number>(0)

    const incCountHandler = () => {
        setCount(count + 1)
    }
    const resetHandler = () => {
        setCount(0)
    }

    return (
        <div className={count >= 5 ? styles.box : ""}>
            <div className={`${styles.container} ${count >= 5 ? styles.contHit : ""}`}>

                <CounterBox count={count}
                            setCount={incCountHandler}
                            resetCount={resetHandler}
                />

            </div>
        </div>

    );
}

export default App;
