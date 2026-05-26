import { Alert } from "antd";
import { useCoinsPaged } from "../hooks/useCoinsPaged";
import CoinsTable from "../components/СoinsTable.jsx";
import { COINS_PAGED_PER_PAGE, COINS_PAGED_TOTAL_PAGES } from "../config/constants.js";
import UiPagination from "../components/UI/UiPagination.jsx";
import { usePagination } from "../hooks/usePagination.js";

function CoinsPagedPage() {
    const { page } = usePagination();
    const { data, isLoading, isFetching, isError, error } = useCoinsPaged(page);

    if (isError) return <Alert type="error" title={error.message}/>;

    return (
        <>
            <CoinsTable
                data={data}
                loading={isLoading || isFetching}
            />
            <UiPagination
                totalPages={COINS_PAGED_TOTAL_PAGES}
                perPage={COINS_PAGED_PER_PAGE}
                style={{ marginTop: 16 }}
            />
        </>
    );
}

export default CoinsPagedPage;
