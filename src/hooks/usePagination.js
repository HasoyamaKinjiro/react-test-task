import { useSearchParams } from "react-router-dom";

export const usePagination = ({ totalPages, perPage } = {}) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get("page")) || 1;

    const handlePageChange = (p) => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            next.set("page", p);
            return next;
        });
    };

    return {
        page,
        handlePageChange,
        ...(totalPages != null && perPage != null && {
            total: totalPages * perPage,
            perPage,
        })
    };
};
