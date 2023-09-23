import { useTheme } from './contexts/themeContext';
import Header from './ui/Header';
import Main from './ui/Main';

function App() {
  const { theme1, theme2, theme3 } = useTheme();

  return (
    <div
      className={`mx-auto flex max-w-5xl flex-col gap-y-6 px-10 pb-8 transition-colors duration-500
      ${theme1 && 'bg-indigo-500 text-white'}
      ${theme2 && 'bg-gray-300 text-black'}
      ${theme3 && 'bg-purple-950 text-yellow-500'}`}
    >
      <Header />
      <Main />
    </div>
  );
}

export default App;
