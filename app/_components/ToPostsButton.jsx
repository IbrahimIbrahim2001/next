import Link from "next/link";

export default function ToPostsButton() {
  return (
    <Link href="posts/1">
      <button type="button">see all posts</button>
    </Link>
  );
}
