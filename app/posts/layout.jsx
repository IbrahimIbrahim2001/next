import styles from "./posts.module.css";

export const metadata = {
  title: "all posts",
  description: "displaying posts",
};

export default function PostsLayout({ children }) {
  return (
    <div className={styles.postsLayout}>
      <h2 className={styles.title}>Ibrahim Ibrahim</h2>
      {children}
    </div>
  );
}
