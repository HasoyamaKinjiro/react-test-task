import { useEffect } from "react";
import { useCoins } from "../hooks/useCoins";
import CoinsTable from "../components/СoinsTable.jsx";
import { useNotification } from "../hooks/useNotification.js";

function CoinsPage() {
    const { data, isLoading, isError, error } = useCoins();
    const { notifyError } = useNotification();

    useEffect(() => {
        if (isError) notifyError("Failed to load coins", error?.message);
    }, [isError, error?.message, notifyError]);

    return (
        <CoinsTable data={data} loading={isLoading} />
    );
}

export default CoinsPage;
