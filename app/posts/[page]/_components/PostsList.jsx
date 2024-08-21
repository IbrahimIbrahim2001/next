import Post from "./Post";

import getPosts from "../_api/getPosts";
import { notFound } from "next/navigation";

export default async function PostsList({ page }) {
  const posts = await getPosts(page);
  return (
    <>
      {posts.length > 0
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : notFound()}
    </>
  );
}
