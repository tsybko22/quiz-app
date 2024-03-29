const Btn = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 md:px-10 py-3 rounded-full transition-colors text-lg md:text-2xl text-zinc-300 bg-zinc-800 hover:bg-zinc-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Btn;
