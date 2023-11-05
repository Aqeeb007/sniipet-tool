"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SearchInput } from "../SearchInput";
import { MobileSidebar } from "../Sidebar/MobileSidebar";
export const Navbar = () => {
  return (
    <>
      <div className="p-4 border-b h-full flex justify-between items-center bg-white shadow-sm">
        <MobileSidebar />
        <div className="md:pl-4">
          <SearchInput />
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-x-2 ml-auto">
            <Link href="/snippet">
              <Button size="sm" variant="ghost">
                Add snippet
              </Button>
            </Link>
            <Link href="/login">
              <Button
                className="  bg-blue-500 rounded-xl  hover:bg-blue-600"
                size="sm"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
