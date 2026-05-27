import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client";
import { COINS_PAGED_PER_PAGE } from "../config/constants.js";

const fetchCoinsPaged = (page) =>
    apiClient.get("/coins/markets", {
        params: { vs_currency: "usd", per_page: COINS_PAGED_PER_PAGE, page },
    });

export const useCoinsPaged = (page) =>
    useQuery({
        queryKey: ["coins-paged", page],
        queryFn: () => fetchCoinsPaged(page),
        placeholderData: (prev) => prev,
    });
