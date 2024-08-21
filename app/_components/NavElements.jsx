import styles from "../page.module.css";
//component
import NavElement from "./NavElement";

export default function NavElements({ navItems }) {
  return (
    <nav className={styles.nav}>
      {navItems.map((element) => (
        <NavElement key={element.id} element={element} />
      ))}
    </nav>
  );
}
