import React, {useState} from 'react';

function App() {
  const initialState = 0;
  const [count, setCount] = useState(initialState)

  const incrementFive = () => {
    for (let index = 0; index < 5; index++) {
        setCount (prevCount => prevCount + 1);
    }
  }

  return (
    <div>
      Count: {count}
      <button onClick={() => {setCount(initialState)}}>Reset</button>
      <button onClick={()=> setCount(count+1)}>Count</button>
      <button onClick={incrementFive}>Increment</button>
    </div>
  )
}


export default App;
