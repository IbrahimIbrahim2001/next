import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <h1 className={styles.title}> Hello World - Next</h1>
      <Link href="posts">
        <button type="button">
          see all posts
        </button>
      </Link>
    </main>
  );
}
