const Loading = () => {
  return (
    <div className="w-full block my-20">
      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mx-auto"
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
