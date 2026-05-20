import { useState } from "react";

function Counter() {
    //state
    const [count, setCount] = useState(0); //--> gives an array [currentState, functionToUpdateTheState]
    //let count = 0;

    //function to modify the state
    const increment=()=>{
        //count = count + 1; --- IGNORE ---
        setCount(count + 1);
    };
    const decrement=()=>{
        // count -= 1; --- IGNORE ---
        setCount(count - 1);
    };
    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">Counter: {count}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-7 mb-5" onClick={increment}>+</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-5" onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;