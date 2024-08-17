"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import styles from "../page.module.css";

export default function NavElements({ navItems }) {
  const pathName = usePathname();
  return (
    <nav className={styles.nav}>
      {navItems.map((element) => (
        <Link
          key={element.id}
          className={
            pathName === element.href
              ? `${styles.navItem} ${styles.active}`
              : styles.navItem
          }
          href={element.href}
        >
          {element.title}
        </Link>
      ))}
    </nav>
  );
}
