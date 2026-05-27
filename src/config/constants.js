export const COINS_TOTAL_PAGES = 1;
export const COINS_PER_PAGE = 50;

export const COINS_PAGED_TOTAL_PAGES = 20;
export const COINS_PAGED_PER_PAGE = 20;

export const TABLE_SKELETON_ROWS = 20;
export const COINS_SORT_KEY_MAP = {
    rank:      "market_cap_rank",
    price:     "current_price",
    change24h: "price_change_percentage_24h",
    marketCap: "market_cap",
    volume:    "total_volume",
};

export const CHART_COINS = [
    { label: "Bitcoin",  value: "bitcoin" },
    { label: "Ethereum", value: "ethereum" },
    { label: "Dogecoin", value: "dogecoin" },
];
