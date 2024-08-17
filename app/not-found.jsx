import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1>there is an error fetching data :(</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
