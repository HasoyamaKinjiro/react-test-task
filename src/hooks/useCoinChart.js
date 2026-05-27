import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client";

const fetchCoinChart = (coinId) =>
    apiClient.get(`/coins/${coinId}/market_chart`, {
        params: { vs_currency: "usd", days: 7 },
    });

export const useCoinChart = (coinId) =>
    useQuery({
        queryKey: ["coin-chart", coinId],
        queryFn: () => fetchCoinChart(coinId),
        refetchInterval: 20_000,
    });
