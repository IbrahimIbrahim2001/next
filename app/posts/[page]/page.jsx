import PostsList from "./_components/PostsList";
import Loading from "./loading";

import { Suspense } from "react";
import styles from "./posts.module.css";

export default function PostsPage({ params }) {
  const { page } = params;
  return (
    <div className={styles.posts}>
      <Suspense fallback={<Loading />}>
        <PostsList page={page} />
      </Suspense>
    </div>
  );
}
