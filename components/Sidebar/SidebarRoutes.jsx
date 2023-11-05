"use client";
import { SidebarItem } from "./SidebarItem";
import { Maximize2, PlusIcon, User } from "lucide-react";

const routes = [
  {
    label: "Explore",
    to: "/",
    icon: Maximize2,
  },
];

const mobileRoutes = [
  {
    label: "Add snippet",
    to: "/snippet",
    icon: PlusIcon,
  },
  {
    label: "Sign In",
    to: "/login",
    icon: User,
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.to}
          icon={route.icon}
          label={route.label}
          to={route.to}
        />
      ))}
      <div className="flex flex-col w-full lg:hidden">
        {mobileRoutes.map((route) => (
          <SidebarItem
            key={route.to}
            icon={route.icon}
            label={route.label}
            to={route.to}
          />
        ))}
      </div>
    </div>
  );
};
