"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";

const NavItem = ({ title, href }) => {
  const pathName = usePathname();
  const segments = useSelectedLayoutSegments();

  const isActive =
    href === pathName || segments.includes(href.replace(/\//g, ""));

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block py-2 px-3 rounded-[8px] text-sm min-w-[100px] text-center border-2 hover:bg-green-100 hover:border-2 hover:border-green-500 border-transparent",
          isActive && "bg-green-100 shadow-sm border-green-500 border-2"
        )}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
