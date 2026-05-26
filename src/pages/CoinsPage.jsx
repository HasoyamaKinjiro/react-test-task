import { Alert } from "antd";
import { useCoins } from "../hooks/useCoins";
import CoinsTable from "../components/СoinsTable.jsx";

function CoinsPage() {
    const { data, isLoading, isError, error } = useCoins();

    if (isError) return <Alert type="error" title={error.message} />;

    return (
        <CoinsTable data={data} loading={isLoading} />
    );
}

export default CoinsPage;
