"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col gap-4 justify-center items-center bg-white text-black ">
      <div className="w-fit h-fit text-xl font-bold tracking-widest">
        Uhmm! This is embarrasing, something went terribly wrong.
      </div>
      <div className="flex flex-row justify-center items-center">
        <p
          onClick={() => router.push("/")}
          className="text-sm font-light underline cursor-pointer"
        >
          return home
        </p>
      </div>
    </div>
  );
};

export default ErrorState;
