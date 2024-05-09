import React, {useState} from 'react';
import './App.css';
import {usePrevious, useToggle, useLocalStorage} from "./hooks/CustomHooks";


const App = () => {
    const [value1, toggleValue] = useToggle(false);

    const [value2, setValue2] = useState<number>(0);
    const previousValue = usePrevious<number>(value2);

    const IncreaseNumber = (step: number) => {
        setValue2(currentCount => currentCount + step);
    };
    const ReduceNumber = (step: number) => {
        setValue2(currentCount => currentCount - step);
    }

    const [color, setColor, removeColor] = useLocalStorage<string | undefined>('color', undefined);

    return (
        <div className={'mainBody'}>

            <h2>useToggle hook</h2>
            <button onClick={toggleValue}>Show/hide text</button>
            {/*{value1 && <p>{value1 ? 'This text is visible' : ''}</p>}*/}
            {value1 && <p>This text is visible</p>}
            <hr/>

            <h2>usePrevious</h2>
            <button onClick={() => {
                IncreaseNumber(2)
            }}> +2 for number
            </button>
            <button onClick={() => {
                ReduceNumber(1)
            }}> -1 for number
            </button>
            <p>{value2} - {previousValue}</p>
            <hr/>

            <h2>useStorage</h2>
            <p>Choose your favorite color</p>
            <div>
                <button onClick={() => setColor('Red')}>Red</button>
                <button onClick={() => setColor('Green')}>Green</button>
                <button onClick={() => setColor('Blue')}>Blue</button>
                <button onClick={removeColor}>Remove color</button>
            </div>
            {color && <div className={'circle'} style={{backgroundColor: color}}></div>}
            <hr/>

        </div>
    );
};

export default App;

// Уважно прочитати і створити хуки яки роблять відповідні дії
//
// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
//
// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable
//
// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage
