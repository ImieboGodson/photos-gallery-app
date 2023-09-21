"use client";

import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-center">
      <HashLoader color="black" size={60} />
    </div>
  );
};

export default Loader;
