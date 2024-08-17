import Link from "next/link";
import styles from "../posts.module.css";

export default function Post({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className={styles.post}>
        <h3>
          {post.id}- {post.title}
        </h3>
      </div>
    </Link>
  );
}
