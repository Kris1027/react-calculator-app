import SwitchThemer from '../components/SwitchThemer';

function Header() {
  return (
    <header className="flex items-center justify-between pt-4">
      <h1 className="text-2xl font-bold">calc</h1>
      <SwitchThemer />
    </header>
  );
}

export default Header;
