const Loader = () => {
  return (
    <div
      className="inline-block h-24 w-24 animate-spin rounded-full text-zinc-300 border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    ></div>
  );
};

export default Loader;
