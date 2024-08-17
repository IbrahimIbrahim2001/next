import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1>sorry for that :(</h1>
      <Link href="/posts">posts</Link>
    </div>
  );
}
