import { notFound } from "next/navigation";

const getPost = async (postId) => {
    await new Promise((resolve) => setInterval(resolve, 3000));
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    if (!res.ok) notFound();
    return res.json();
};

module.exports = getPost;
