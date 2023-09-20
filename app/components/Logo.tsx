"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex flex-row gap-1 items-center cursor-pointer"
    >
      <Image src="/images/logo.png" alt="logo" height={33} width={33} />
      <div className="hidden md:block text-sm font-medium">Rembrandt</div>
    </div>
  );
};

export default Logo;
