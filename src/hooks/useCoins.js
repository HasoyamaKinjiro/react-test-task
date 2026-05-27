import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client.js";
import { COINS_PER_PAGE, COINS_TOTAL_PAGES } from "../config/constants.js";

const fetchCoins = () =>
    apiClient.get("/coins/markets", {
        params: { vs_currency: "usd", per_page: COINS_PER_PAGE, page: COINS_TOTAL_PAGES },
    });

export const useCoins = () =>
    useQuery({
        queryKey: ["coins"],
        queryFn: fetchCoins,
    });
