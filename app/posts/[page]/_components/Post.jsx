"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "../posts.module.css";

export default function Post({ post }) {
  const { page } = useParams();

  return (
    <Link href={`/posts/${page}/${post.id}`}>
      <div className={styles.post}>
        <h3>
          {post.id}- {post.title}
        </h3>
      </div>
    </Link>
  );
}
