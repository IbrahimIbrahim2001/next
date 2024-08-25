import { useParams, useRouter } from "next/navigation";

export default function usePagination() {
    const router = useRouter();
    const { page } = useParams();

    const handleNextPage = () => {
        if (parseInt(page) < 10) {
            const newPage = parseInt(page) + 1;
            router.push(`/posts/${newPage}`);
        }
    };
    const handlePrevPage = () => {
        if (parseInt(page) > 1) {
            const newPage = parseInt(page) - 1;
            router.push(`/posts/${newPage}`);
        }
    };
    return { handleNextPage, handlePrevPage, page };
}
