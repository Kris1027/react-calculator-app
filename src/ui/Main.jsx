import Button from '../components/Button';
import { useState } from 'react';
import { useTheme } from '../contexts/themeContext';

function Main() {
  const { theme1, theme2, theme3 } = useTheme();

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
      <div
        className={`flex h-20 flex-wrap items-center justify-end rounded-lg px-4 text-5xl font-bold transition-colors duration-500
        ${theme1 && 'bg-indigo-900'}
        ${theme2 && 'bg-slate-100'}
        ${theme3 && ' bg-purple-900'}`}
      >
        {currentValue}
      </div>
      <div
        className={`grid grid-cols-4 gap-4 rounded-lg p-6 text-3xl font-bold transition-colors duration-500
        ${theme1 && 'bg-indigo-900'}
        ${theme2 && 'bg-gray-400'}
        ${theme3 && 'bg-purple-900'}`}
      >
        <Button onClick={() => handleSetNumbers(7)}>7</Button>
        <Button onClick={() => handleSetNumbers(8)}>8</Button>
        <Button onClick={() => handleSetNumbers(9)}>9</Button>
        <button
          onClick={handleDelete}
          className={`text rounded-lg py-6 uppercase transition-colors duration-500 active:scale-95
          ${
            theme1 &&
            'delete-shadow-button-1 bg-indigo-400 text-white hover:bg-indigo-200'
          }
          ${
            theme2 &&
            'delete-shadow-button-2 bg-teal-600 text-white hover:bg-teal-500'
          }
          ${
            theme3 &&
            'delete-shadow-button-3 bg-purple-950 text-white hover:bg-purple-400'
          }`}
        >
          del
        </button>
        <Button onClick={() => handleSetNumbers(4)}>4</Button>
        <Button onClick={() => handleSetNumbers(5)}>5</Button>
        <Button onClick={() => handleSetNumbers(6)}>6</Button>
        <Button onClick={() => handleSetOperations('+')}>+</Button>
        <Button onClick={() => handleSetNumbers(1)}>1</Button>
        <Button onClick={() => handleSetNumbers(2)}>2</Button>
        <Button onClick={() => handleSetNumbers(3)}>3</Button>
        <Button onClick={() => handleSetOperations('-')}>-</Button>
        <Button onClick={() => handleSetNumbers(`.`)}>.</Button>
        <Button onClick={() => handleSetNumbers(0)}>0</Button>
        <Button onClick={() => handleSetOperations('/')}>/</Button>
        <Button onClick={() => handleSetOperations('*')}>x</Button>
        <button
          onClick={handleReset}
          className={`col-span-2 rounded-lg py-6 uppercase transition-colors duration-500 active:scale-95
          ${
            theme1 &&
            'delete-shadow-button-1 bg-indigo-400 text-white hover:bg-indigo-200'
          }
          ${
            theme2 &&
            'delete-shadow-button-2 bg-teal-600 text-white hover:bg-teal-500'
          }
          ${
            theme3 &&
            'delete-shadow-button-3 bg-purple-950 text-white hover:bg-purple-400'
          }`}
        >
          reset
        </button>
        <button
          onClick={perforOperation}
          className={`col-span-2 rounded-lg py-6 uppercase transition-colors duration-500 active:scale-95
          ${
            theme1 &&
            'equals-shadow-button-1 bg-red-600 text-white hover:bg-red-400'
          }
          ${
            theme2 &&
            'equals-shadow-button-2 bg-orange-500 text-white hover:bg-orange-400'
          }
          ${
            theme3 &&
            'equals-shadow-button-3 bg-teal-600 text-black hover:bg-teal-400'
          }`}
        >
          =
        </button>
      </div>
    </main>
  );
}

export default Main;
