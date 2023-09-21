"use client";

import { usePathname } from "next/navigation";
import Container from "../Container";
import Logo from "../Logo";
// import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Search from "./Search";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const pathname = usePathname();
  return (
    <div className="fixed w-full z-30 bg-white">
      <div className="py-3">
        <Container>
          <div className="flex flex-row justify-between items-center gap-2">
            <div>
              <Logo />
            </div>
            <div className="sm:ml-12 md:ml-0 md:w-[35vw] ">
              <Search />
            </div>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
