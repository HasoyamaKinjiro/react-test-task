import { useState } from "react";
import { Flex, Segmented, Button, Spin, Alert, Typography } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import CoinsChart from "../components/CoinsChart";
import { useCoinChart } from "../hooks/useCoinChart";
import { CHART_COINS } from "../config/constants.js";

const { Title } = Typography;

function ChartPage() {
    const [coinId, setCoinId] = useState("bitcoin");
    const { data, isLoading, isFetching, isError, error, refetch } = useCoinChart(coinId);

    const chartData = (() => {
        const raw = data?.prices?.map(([ts, price]) => ({
            date: new Date(ts).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
            price,
        })) ?? [];

        if (!raw.length) return [];

        const firstDate = raw[0].date;
        const firstDayCount = raw.filter((d) => d.date === firstDate).length;

        return firstDayCount < 20 ? raw.filter((d) => d.date !== firstDate) : raw;
    })();


    return (
        <Flex vertical gap={16}>
            <Flex justify="space-between" align="center" wrap="wrap" gap={12}>
                <Title level={4} style={{ marginTop: 0 }}>Price for 7 days</Title>
                <Flex gap={12} align="center">
                    <Segmented
                        options={CHART_COINS}
                        value={coinId}
                        onChange={setCoinId}
                    />
                    <Button icon={<ReloadOutlined />} loading={isFetching} onClick={refetch}>
                        Update
                    </Button>
                </Flex>
            </Flex>

            {isError && <Alert type="error" title={error.message} />}

            <Spin spinning={isLoading} size="large">
                <CoinsChart data={chartData} />
            </Spin>
        </Flex>
    );
}

export default ChartPage;
