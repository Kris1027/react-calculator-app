import { useState } from "react";

function SwitchThemer() {
  const [theme1, setTheme1] = useState(true);
  const [theme2, setTheme2] = useState(false);
  const [theme3, setTheme3] = useState(false);

  function handleChangeTheme1() {
    setTheme1(true);
    setTheme2(false);
    setTheme3(false);
  }

  function handleChangeTheme2() {
    setTheme1(false);
    setTheme2(true);
    setTheme3(false);
  }

  function handleChangeTheme3() {
    setTheme1(false);
    setTheme2(false);
    setTheme3(true);
  }

  return (
    <div className="flex items-center gap-x-12 pt-2">
      <h2 className="uppercase">theme</h2>
      <div className="relative">
        <div className="relative my-2 h-6 w-24 rounded-xl bg-indigo-900 p-1">
          <div
            className={`absolute ${theme1 && "left-1 top-1"} ${
              theme2 && "left-1/2 top-1 -translate-x-1/2 transform"
            } ${
              theme3 && "right-1 top-1"
            } h-4 w-4 rounded-full bg-red-600 duration-100 ease-linear`}
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
