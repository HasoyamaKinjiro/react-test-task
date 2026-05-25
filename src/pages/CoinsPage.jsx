import { Alert } from "antd";
import { useCoins } from "../hooks/useCoins";
import CoinsTable from "../components/СoinsTable.jsx";
import UiSpin from "../components/UI/UiSpin.jsx";

function CoinsPage() {
    const { data, isLoading, isError, error } = useCoins();

    if (isLoading) return <UiSpin />;
    if (isError) return <Alert type="error" title={error.message} />;

    return (
        <CoinsTable data={data}/>
    );
}

export default CoinsPage;
