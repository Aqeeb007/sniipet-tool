"use client";
import { usePathname, useRouter } from "next/navigation";

export const SidebarItem = ({ icon: Icon, label, to }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(to);
      }}
      type="button"
      className={
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20"
      }
    >
      <Icon />
      <div className="flex items-center gap-x-2 py-4">{label}</div>
      <div
        className={
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all"
        }
      />
    </button>
  );
};
