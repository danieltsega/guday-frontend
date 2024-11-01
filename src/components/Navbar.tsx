// Components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsBell } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full flex justify-center items-center min-h-[52px] md:h-auto px-2 md:px-0  xl:px-0  pt-2 pb-1 shadow bg-green-50 z-50 md:mb-14">
      <div className="flex md:max-w-4xl mx-auto justify-between items-center gap-4 w-[907px] h-full py-2 ">
        <div className="flex gap-[4rem]">
          <Link href="/">
            <div className="flex items-center">
              <span className="bg-green-500 text-white font-bold text-2xl py-1 px-3 rounded-md">
                G
              </span>
              <span className="ml-1 text-xl font-bold text-green-500">
                uday
              </span>
            </div>
          </Link>
          <div className="md:flex gap-2 hidden">
            <Input placeholder="Search" />
            <Button className="bg-green-500 hover:bg-green-600">Search</Button>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="md:hidden flex items-center">
            <FaSearch />
          </div>
          <Link href="/">
            <BsBell className="text-xl" />
          </Link>
          <Link href="/">
            <Button className="bg-green-500 hover:bg-green-600">
              ጉዳይ አስፈፃሚ
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <FaRegUserCircle className="text-3xl text-green-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Login</DropdownMenuItem>
              <DropdownMenuItem>Signup</DropdownMenuItem>
              <DropdownMenuItem>About us</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
