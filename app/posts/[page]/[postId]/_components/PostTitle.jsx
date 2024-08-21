import getPost from "../_api/fetchPostDetails";
import styles from "../post.module.css";
export default async function PostTitle({ postId }) {
  const post = await getPost(postId);
  return (
    <>
      <p className={styles.title}>{post.title}</p>
    </>
  );
}
