import Button from '../components/Button';
import BigButton from '../components/BigButton';
import { useState } from 'react';

function Main() {
  const [state, setState] = useState('');

  function handleButtonClick(content) {
    setState(state + content);
  }

  function handleDelete() {
    if (state.length > 0) {
      const newState = state.slice(0, -1);
      setState(newState);
    }
  }

  function handleEquals() {
    const result = eval(state);

    if (!isNaN(result)) {
      setState(result.toString());
    } else {
      setState('Error');
    }
  }

  return (
    <main className="flex flex-col gap-y-6">
      <div className="flex h-20 items-center justify-end rounded-lg bg-indigo-900 px-4 text-5xl font-bold text-white">
        {state}
      </div>
      <div className="grid grid-cols-4 gap-4 rounded-lg bg-indigo-900 p-6 text-3xl font-bold">
        <Button onClick={() => handleButtonClick('7')}>7</Button>
        <Button onClick={() => handleButtonClick('8')}>8</Button>
        <Button onClick={() => handleButtonClick('9')}>9</Button>
        <Button onClick={() => handleDelete()}>del</Button>
        <Button onClick={() => handleButtonClick('4')}>4</Button>
        <Button onClick={() => handleButtonClick('5')}>5</Button>
        <Button onClick={() => handleButtonClick('6')}>6</Button>
        <Button onClick={() => handleButtonClick('+')}>+</Button>
        <Button onClick={() => handleButtonClick('1')}>1</Button>
        <Button onClick={() => handleButtonClick('2')}>2</Button>
        <Button onClick={() => handleButtonClick('3')}>3</Button>
        <Button onClick={() => handleButtonClick('-')}>-</Button>
        <Button onClick={() => handleButtonClick('.')}>.</Button>
        <Button onClick={() => handleButtonClick('0')}>0</Button>
        <Button onClick={() => handleButtonClick('/')}>/</Button>
        <Button onClick={() => handleButtonClick('*')}>x</Button>
        <BigButton onClick={() => setState('')}>reset</BigButton>
        <BigButton onClick={() => handleEquals()}>=</BigButton>
      </div>
    </main>
  );
}

export default Main;
