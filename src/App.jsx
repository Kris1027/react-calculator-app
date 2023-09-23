import { ThemeProvider } from './contexts/themeContext';
import Header from './ui/Header';
import Main from './ui/Main';

function App() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-y-6 bg-indigo-500 px-10 pb-8">
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
