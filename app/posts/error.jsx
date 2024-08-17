"use client";

export default function ErrorBoundary({ reset }) {
  return (
    <>
      <div>Error fetching data</div>
      <button onClick={reset}>reset</button>
    </>
  );
}
