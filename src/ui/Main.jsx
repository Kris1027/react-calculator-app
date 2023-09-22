import Button from '../components/Button';
import BigButton from '../components/BigButton';
import { useState } from 'react';

function Main() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('0');
  const [currentValue, setCurrentValue] = useState(result);

  function handleSetNumbers(value) {
    if (operation == '') {
      setFirstNumber(firstNumber + value);
      setCurrentValue(firstNumber + value);
    } else {
      setSecondNumber(secondNumber + value);
      setCurrentValue(secondNumber + value);
    }
  }

  function handleSetOperations(value) {
    setOperation(value);
    setCurrentValue(value);
  }

  function perforOperation() {
    switch (operation) {
      case '+':
        setResult(Number(firstNumber) + Number(secondNumber));
        setFirstNumber(Number(firstNumber) + Number(secondNumber));
        setSecondNumber('');
        setCurrentValue(Number(firstNumber) + Number(secondNumber));
        break;
      case '-':
        setResult(Number(firstNumber) - Number(secondNumber));
        setFirstNumber(Number(firstNumber) - Number(secondNumber));
        setSecondNumber('');
        setCurrentValue(Number(firstNumber) - Number(secondNumber));
        break;
      case '*':
        setResult(Number(firstNumber) * Number(secondNumber));
        setFirstNumber(Number(firstNumber) * Number(secondNumber));
        setSecondNumber('');
        setCurrentValue(Number(firstNumber) * Number(secondNumber));
        break;
      case '/':
        setResult(Number(firstNumber) / Number(secondNumber));
        setFirstNumber(Number(firstNumber) / Number(secondNumber));
        setSecondNumber('');
        setCurrentValue(Number(firstNumber) / Number(secondNumber));
        break;
    }
  }

  function handleReset() {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult('0');
    setCurrentValue('0');
  }

  function handleDelete() {
    if (operation === '') {
      setFirstNumber(firstNumber.slice(0, -1));
      setCurrentValue(firstNumber.slice(0, -1));
    } else {
      setSecondNumber(secondNumber.slice(0, -1));
      setCurrentValue(secondNumber.slice(0, -1));
    }
  }

  return (
    <main className="flex flex-col gap-y-6">
      <div className="flex h-20 flex-wrap items-center justify-end rounded-lg bg-indigo-900 px-4 text-5xl font-bold text-white ">
        {currentValue}
      </div>
      <div className="grid grid-cols-4 gap-4 rounded-lg bg-indigo-900 p-6 text-3xl font-bold">
        <Button onClick={() => handleSetNumbers(7)}>7</Button>
        <Button onClick={() => handleSetNumbers(8)}>8</Button>
        <Button onClick={() => handleSetNumbers(9)}>9</Button>
        <Button onClick={handleDelete}>del</Button>
        <Button onClick={() => handleSetNumbers(4)}>4</Button>
        <Button onClick={() => handleSetNumbers(5)}>5</Button>
        <Button onClick={() => handleSetNumbers(6)}>6</Button>
        <Button onClick={() => handleSetOperations('+')}>+</Button>
        <Button onClick={() => handleSetNumbers(1)}>1</Button>
        <Button onClick={() => handleSetNumbers(2)}>2</Button>
        <Button onClick={() => handleSetNumbers(3)}>3</Button>
        <Button onClick={() => handleSetOperations('-')}>-</Button>
        <Button onClick={() => handleSetNumbers('.')}>.</Button>
        <Button onClick={() => handleSetNumbers(0)}>0</Button>
        <Button onClick={() => handleSetOperations('/')}>/</Button>
        <Button onClick={() => handleSetOperations('*')}>x</Button>
        <BigButton onClick={handleReset}>reset</BigButton>
        <BigButton onClick={perforOperation}>=</BigButton>
      </div>
    </main>
  );
}

export default Main;
