import { error } from "console";
import { notFound } from "next/navigation";
import Post from "../../app/posts/components/post";

async function getPosts() {
  await new Promise((resolve) => setInterval(resolve, 3000));
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10",
      {
        next: {
          revalidate: 0,
        },
      }
    );

    if (!response.ok) {
      return notFound();
    }

    return response.json();
  } catch (error) {
    if (error.name === "NetworkError") return notFound();
  }
  throw error;
}

export default async function PostsList({ post }) {
  const posts = await getPosts();
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
