"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import useDropMenu from "@/app/hooks/useDropMenu";
import { useCallback } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeUser } from "@/app/types";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const pathname = usePathname();
  const router = useRouter();
  const dropMenu = useDropMenu();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const handleToggle = useCallback(() => {
    if (dropMenu.isOpen) {
      return dropMenu.onClose();
    }

    return dropMenu.onOpen();
  }, [dropMenu]);

  const handleClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    return router.push("/owner/create-listing");
  }, [currentUser, loginModal, router]);

  return (
    <div className="relative w-fit flex  flex-row gap-6 justify-between items-center">
      <div className="p-[5px] flex flex-row gap-2 justify-between items-center border-l-2 cursor-pointer">
        <div
          onClick={handleToggle}
          className="ml-2 lg:ml-4 flex flex-row gap-2 justify-between items-center"
        >
          <div className="hidden md:block">
            <Avatar userImage={currentUser?.image} />
          </div>
          {currentUser && (
            <div className="hidden lg:flex flex-col items-start max-w-[150px] overflow-hidden">
              <div className="text-xs font-bold truncate">
                {currentUser.name}
              </div>
              <div className="text-xs font-light truncate">
                {currentUser.email}
              </div>
            </div>
          )}
          <IoIosArrowDown size={17} />
        </div>
        {dropMenu.isOpen && (
          <div className="absolute right-0 top-12 w-[60vw] sm:w-[28vw] lg:w-[20vw] xl:w-[16vw] py-2 flex flex-col bg-white rounded-lg shadow-lg">
            {currentUser ? (
              <>
                <div className="pb-2 font-bold">
                  <MenuItem title="Messages" onClick={() => {}} />
                </div>
                <div className="py-2 border-t-[1px]">
                  <MenuItem title="Account" onClick={() => {}} />
                </div>
                <div className="py-2 border-t-[1px]">
                  <MenuItem title="Log out" onClick={() => signOut()} />
                </div>
              </>
            ) : (
              <>
                <div>
                  <MenuItem
                    title="Log in"
                    onClick={() => loginModal.onOpen()}
                  />
                  <MenuItem
                    title="Sign up"
                    onClick={() => registerModal.onOpen()}
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
