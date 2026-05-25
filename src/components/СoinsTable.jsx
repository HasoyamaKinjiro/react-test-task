import { Avatar, Flex, Table, Tooltip, Typography } from "antd";
const { Text } = Typography;

const fmtPrice = (v) =>
    "$" + Number(v).toLocaleString("en-US", { maximumFractionDigits: 0 });

const fmtPercent = (v) => {
    const fixed = Number(v).toFixed(2) + "%";
    return (
        <Text style={{ color: v >= 0 ? "#52c41a" : "#f5222d" }}>
            {v >= 0 ? "+" : ""}
            {fixed}
        </Text>
    );
};

const fmtCompact = (v) => {
    if (v >= 1e12) return "$" + (v / 1e12).toFixed(2) + "T";
    if (v >= 1e9)  return "$" + (v / 1e9).toFixed(2) + "B";
    if (v >= 1e6)  return "$" + (v / 1e6).toFixed(2) + "M";
    return "$" + Number(v).toLocaleString("en-US");
};

const columns = [
    {
        title: "#",
        dataIndex: "market_cap_rank",
        key: "rank",
        width: 60,
        sorter: (a, b) => a.market_cap_rank - b.market_cap_rank,
        defaultSortOrder: "ascend",
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (name, record) => (
            <Flex align="center" gap={10}>
                <Avatar src={record.image} size={24} />
                <Tooltip title={name}>
                    <Text ellipsis style={{ maxWidth: 160 }}>{name}</Text>
                </Tooltip>
                <Text type="secondary">
                    {record.symbol.toUpperCase()}
                </Text>
            </Flex>
        ),
    },
    {
        title: "Price",
        dataIndex: "current_price",
        key: "price",
        align: "right",
        render: fmtPrice,
        sorter: (a, b) => a.current_price - b.current_price,
    },
    {
        title: "24h %",
        dataIndex: "price_change_percentage_24h",
        key: "change24h",
        align: "right",
        render: fmtPercent,
        sorter: (a, b) =>
            a.price_change_percentage_24h - b.price_change_percentage_24h,
    },
    {
        title: "Market Cap",
        dataIndex: "market_cap",
        key: "marketCap",
        align: "right",
        render: fmtCompact,
        sorter: (a, b) => a.market_cap - b.market_cap,
    },
    {
        title: "Volume 24h",
        dataIndex: "total_volume",
        key: "volume",
        align: "right",
        render: fmtCompact,
        sorter: (a, b) => a.total_volume - b.total_volume,
    },
];

function CoinsTable({ data }) {
    return (
        <div>
            <Table
                rowKey="id"
                dataSource={data}
                columns={columns}
                pagination={false}
                sticky
                size="middle"
            />
        </div>
    );
}

export default CoinsTable;
