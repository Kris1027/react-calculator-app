import Button from '../components/Button';
import BigButton from '../components/BigButton';

function Main() {
  return (
    <main className="flex flex-col gap-y-6">
      <div className="rounded-lg bg-indigo-900 p-6 text-end text-5xl font-bold text-white">
        399,981
      </div>
      <div className="grid grid-cols-4 gap-4 rounded-lg bg-indigo-900 p-6 text-3xl font-bold">
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>del</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>+</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>-</Button>
        <Button>.</Button>
        <Button>0</Button>
        <Button>/</Button>
        <Button>x</Button>
        <BigButton>reset</BigButton>
        <BigButton>=</BigButton>
      </div>
    </main>
  );
}

export default Main;
