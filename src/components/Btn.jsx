const Btn = ({ children, ...props }) => {
  return (
    <button
      className="px-10 py-3 rounded-full transition-colors text-2xl text-zinc-300 bg-zinc-800 hover:bg-zinc-700"
      {...props}
    >
      {children}
    </button>
  );
};

export default Btn;
