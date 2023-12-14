"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavItem = ({ title, href }) => {
  const pathName = usePathname();

  const isActive = href === pathName;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block py-2 px-3 rounded text-sm min-w-[100px] text-center border-2 border-transparent",
          isActive &&
            "bg-blue-100 rounded-[8px] shadow-sm border-blue-500 border-2"
        )}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
