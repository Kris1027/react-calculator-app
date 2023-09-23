import { useTheme } from '../contexts/themeContext';

function Button({ children, onClick }) {
  const { theme1, theme2, theme3 } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`rounded-lg py-6 uppercase active:scale-95
      ${theme1 && 'button-shadow-1 bg-white text-indigo-900 hover:bg-slate-200'}
      ${theme2 && 'button-shadow-2 bg-slate-100 text-black hover:bg-slate-200'}
      ${
        theme3 &&
        'button-shadow-3 bg-purple-700 text-yellow-500 hover:bg-purple-500'
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
