import { Pagination } from "antd";
import { usePagination } from "../../hooks/usePagination";

function UiPagination({ totalPages, perPage, align = "center", showSizeChanger = false, ...props }) {
    const { page, total, handlePageChange } = usePagination({ totalPages, perPage });

    return (
        <Pagination
            current={page}
            pageSize={perPage}
            total={total}
            onChange={handlePageChange}
            showSizeChanger={showSizeChanger}
            align={align}
            {...props}
        />
    );
}

export default UiPagination;
