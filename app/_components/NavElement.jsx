"use client";

import styles from "../page.module.css";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function NavElement({ element }) {
  const pathName = usePathname();
  const isActive =
    pathName === element.href ||
    (element.href === "/" && pathName === "/") ||
    (element.href.includes("posts/") && pathName.includes("posts/"));
  return (
    <Link
      className={
        isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
      }
      href={element.href}
    >
      {element.title}
    </Link>
  );
}
