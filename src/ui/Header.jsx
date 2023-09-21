import SwitchThemer from "../components/SwitchThemer";

function Header() {
  return (
    <header className="flex items-center justify-between bg-indigo-500 px-10 pb-6 pt-4 text-indigo-100">
      <h1 className="text-2xl font-bold">calc</h1>
      <SwitchThemer />
    </header>
  );
}

export default Header;
