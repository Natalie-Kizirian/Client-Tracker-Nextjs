"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();
  const isActive = path === href || path.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}

      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      {children}
    </Link>
  );
}
