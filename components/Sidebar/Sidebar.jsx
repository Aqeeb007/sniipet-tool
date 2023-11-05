import Link from "next/link";
import { Logo } from "../Logo";
import { SidebarRoutes } from "./SidebarRoutes";

export const Sidebar = () => {
  return (
    <div className="h-screen border-r flex flex-col overflow-y-auto bg-white shadow-sm w-60">
      <div className="py-6 flex items-center justify-center">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
