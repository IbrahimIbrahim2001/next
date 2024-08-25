import styles from "./page.module.css";

import ToPostButton from "./_components/ToPostsButton";

export default function Home() {
  return (
    <main className={styles.home}>
      <h1 className={styles.title}> Hello World - Next</h1>
      <ToPostButton />
    </main>
  );
}
