import Header from "./ui/Header";
import Main from "./ui/Main";

function App() {
  return (
    <div className="flex max-w-lg flex-col gap-y-6 bg-indigo-500 px-10 pb-8">
      <Header />
      <Main />
    </div>
  );
}

export default App;
