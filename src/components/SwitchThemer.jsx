import { useTheme } from '../contexts/themeContext';

function SwitchThemer() {
  const {
    theme1,
    theme2,
    theme3,
    handleChangeTheme1,
    handleChangeTheme2,
    handleChangeTheme3,
  } = useTheme();

  return (
    <div
      className={`flex items-center gap-x-12 pt-2 font-bold
      ${theme2 && 'text-black'}
      ${theme3 && ' text-yellow-500'}`}
    >
      <h2 className="uppercase">theme</h2>
      <div className="relative">
        <div
          className={`relative my-2 h-6 w-24 rounded-xl bg-indigo-900 p-1
        ${theme2 && ' bg-gray-400'}
        ${theme3 && ' bg-purple-900'}`}
        >
          <div
            className={`absolute h-4 w-4 rounded-full bg-red-600 duration-100 ease-linear 
            ${theme1 && 'left-1 top-1'} 
            ${theme2 && 'left-1/2 top-1 -translate-x-1/2 bg-orange-500'} 
            ${theme3 && 'right-1 top-1 bg-teal-500'}`}
          ></div>
          <div className="absolute -top-6 left-0 h-12 w-24 text-center">
            <div className="flex h-full justify-between">
              <span
                onClick={handleChangeTheme1}
                className="h-full w-5 cursor-pointer"
              >
                1
              </span>
              <span
                onClick={handleChangeTheme2}
                className="h-full w-5 cursor-pointer"
              >
                2
              </span>
              <span
                onClick={handleChangeTheme3}
                className="h-full w-5 cursor-pointer"
              >
                3
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwitchThemer;
