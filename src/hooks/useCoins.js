import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client.js";

const fetchCoins = () =>
    apiClient.get("/coins/markets", {
        params: { vs_currency: "usd", per_page: 50, page: 1 },
    });

export const useCoins = () =>
    useQuery({
        queryKey: ["coins"],
        queryFn: fetchCoins,
    });
