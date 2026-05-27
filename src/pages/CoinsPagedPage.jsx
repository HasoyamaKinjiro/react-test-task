import { useEffect } from "react";
import { useCoinsPaged } from "../hooks/useCoinsPaged";
import CoinsTable from "../components/СoinsTable.jsx";
import { COINS_PAGED_PER_PAGE, COINS_PAGED_TOTAL_PAGES } from "../config/constants.js";
import UiPagination from "../components/UI/UiPagination.jsx";
import { usePagination } from "../hooks/usePagination.js";
import { useNotification } from "../hooks/useNotification.js";

function CoinsPagedPage() {
    const { page } = usePagination();
    const { data, isLoading, isFetching, isError, error } = useCoinsPaged(page);
    const { notifyError } = useNotification();

    useEffect(() => {
        if (isError) notifyError("Failed to load coins", error?.message);
    }, [isError, error?.message, notifyError]);

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
