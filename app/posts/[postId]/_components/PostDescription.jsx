import getPost from "../_api/fetchPostDetails";
import styles from "../post.module.css";

export default async function PostDiscription({ postId }) {
  const post = await getPost(postId);
  return (
    <>
      <p className={styles.description}>{post.body}</p>
    </>
  );
}
