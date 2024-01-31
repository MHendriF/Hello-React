/* eslint-disable react/prop-types */
import { useState } from 'react'
import Header from './components/Header';
import MyButton from './components/MyButton';
import MyCounter from './components/MyCounter';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div>
      <Header />
      <MyButton text={'-'} onClick={decrement} counter={counter} />
      <MyCounter counter={counter} />
      <MyButton text={'+'} onClick={increment} counter={counter} />
      <MyButton text={'Reset!'} onClick={reset} counter={counter} />
    </div>
  );
}

export default App
