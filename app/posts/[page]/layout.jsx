import styles from "./posts.module.css";
import Pagination from "./_components/Pagination";

export const metadata = {
  title: "all posts",
  description: "displaying posts",
};

export default function PostsLayout({ children }) {
  return (
    <div className={styles.postsLayout}>
      <h2 className={styles.title}>Ibrahim Ibrahim</h2>
      <div className={styles.pages}>
        <h3 style={{ height: "35px" }}>Posts:</h3>
        <Pagination />
      </div>
      {children}
    </div>
  );
}
