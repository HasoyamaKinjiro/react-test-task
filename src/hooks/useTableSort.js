import { useSearchParams } from "react-router-dom";

export const useTableSort = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const sortField = searchParams.get("sort") || "rank";
    const sortOrder = searchParams.get("order") || "ascend";

    const updateParams = (updates) => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            Object.entries(updates).forEach(([k, v]) => {
                if (v == null) next.delete(k);
                else next.set(k, v);
            });
            return next;
        });
    };

    const handleTableChange = (_pagination, _filters, sorter) => {
        if (sorter.columnKey) {
            updateParams({
                sort:  sorter.order ? sorter.columnKey : null,
                order: sorter.order ?? null,
            });
        }
    };

    return { sortField, sortOrder, handleTableChange };
};
