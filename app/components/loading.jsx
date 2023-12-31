import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className=" text-sky-500 animate-pulse text-3xl">{`< Frontend Assets />`}</p>
      <img src="/spinner.svg" className="animate-spin h-10 w-10" />
    </div>
  );
};

export default LoadingSpinner;
