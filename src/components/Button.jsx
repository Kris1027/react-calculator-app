function Button({ children }) {
  return (
    <button className="rounded-lg bg-slate-300 py-6 uppercase text-indigo-950 hover:bg-slate-100 active:scale-95">
      {children}
    </button>
  );
}

export default Button;
