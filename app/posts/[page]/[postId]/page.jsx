import styles from "./post.module.css";
import { Suspense } from "react";

import { LoadingPostTitle } from "./_components/LoadingPageTitle";
import { LoadingPostDescription } from "./_components/LoadingPostDescription";

import PostTitle from "./_components/PostTitle";
import PostDiscription from "./_components/PostDescription";

export const generateMetadata = ({ params }) => {
  const { postId } = params;
  return {
    title: `post-${postId}`,
    description: `Displaying post with the id: ${postId}`,
  };
};

export default function PostDetailsPage({ params }) {
  const { postId } = params;

  return (
    <div className={styles.PostDetails}>
      <h3>title:</h3>
      <Suspense fallback={<LoadingPostTitle />}>
        <PostTitle postId={postId} />
      </Suspense>
      <h3>description:</h3>
      <Suspense fallback={<LoadingPostDescription />}>
        <PostDiscription postId={postId} />
      </Suspense>
    </div>
  );
}
