import React, { useState } from 'react';

function Day1() {
    const initialState = 0;
    const [count, setcount] = useState(initialState)

    const incrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setcount(prevCount => prevCount +1);
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => (setcount(initialState))}>Reset</button>
            <button onClick={()=> {setcount(count + 1)}}>Increment</button>
            <button onClick={incrementFive}>Increment + 5</button>
        </div>
    )
}

export default Day1;
