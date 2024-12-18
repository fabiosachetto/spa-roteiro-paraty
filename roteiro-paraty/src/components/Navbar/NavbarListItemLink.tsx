import { cn } from "@/helpers/cn";
import { NavbarListItemLinkProps } from "./types";
import { NavbarListItem } from "./NavbarListItem";
import Link from "next/link";

export const NavbarListItemLink = ({ href, children, className, ...props }: NavbarListItemLinkProps) => {
  return (
    <NavbarListItem className={cn("", className)}>
      <Link href={href} className="block" {...props}>
        {children}
      </Link>
    </NavbarListItem>
  );
};