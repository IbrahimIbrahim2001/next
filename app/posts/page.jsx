import Loading from "./loading";
import PostsList from "../components/PostsList";

import styles from "./posts.module.css";
import { Suspense } from "react";

export default function PostsPage() {
  return (
    <div className={styles.posts}>
      <div className={styles.pages}>
        <h3>Posts:</h3>
      </div>
      <Suspense fallback={<Loading />}>
        <PostsList />
      </Suspense>
    </div>
  );
}
