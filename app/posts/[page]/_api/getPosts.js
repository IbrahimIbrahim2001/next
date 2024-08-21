import { notFound } from "next/navigation";
import { error } from "console";


const getPosts = async (page = 1) => {
    await new Promise((resolve) => setInterval(resolve, 3000));
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?https://jsonplaceholder.typicode.com/posts?_limit=10&&_page=${page}`,
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

module.exports = getPosts;
