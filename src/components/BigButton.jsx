function BigButton({ children }) {
  return (
    <button className="col-span-2 rounded-lg bg-indigo-300 py-6 uppercase text-white hover:bg-indigo-200 active:scale-95">
      {children}
    </button>
  );
}

export default BigButton;
