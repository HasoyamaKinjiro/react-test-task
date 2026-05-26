import { Avatar, Flex, Table, Tooltip, Typography, Skeleton } from "antd";
import { COINS_SORT_KEY_MAP, TABLE_SKELETON_ROWS } from "../config/constants.js";
import { fmtCompact, fmtPercent, fmtPrice } from "../config/helpers.jsx";
import { useTableSort } from "../hooks/useTableSort.js";

const { Text } = Typography;

const SKELETON_ROWS = Array.from({ length: TABLE_SKELETON_ROWS }, (_, i) => ({ id: `skeleton-${i}` }));

const buildColumns = (sortField, sortOrder) => [
    {
        title: "#",
        dataIndex: "market_cap_rank",
        key: "rank",
        width: 60,
        sorter: true,
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (name, record) => (
            <Flex align="center" gap={10}>
                <Avatar src={record.image} size={24} />
                <Tooltip title={name}>
                    <Text ellipsis style={{ maxWidth: 154 }}>{name}</Text>
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
        sorter: true,
    },
    {
        title: "24h %",
        dataIndex: "price_change_percentage_24h",
        key: "change24h",
        align: "right",
        render: fmtPercent,
        sorter: true,
    },
    {
        title: "Market Cap",
        dataIndex: "market_cap",
        key: "marketCap",
        align: "right",
        render: fmtCompact,
        sorter: true,
    },
    {
        title: "Volume 24h",
        dataIndex: "total_volume",
        key: "volume",
        align: "right",
        render: fmtCompact,
        sorter: true,
    },
].map((col) => ({
    ...col,
    sortOrder: col.key === sortField ? sortOrder : null,
    ...(col.sorter && { sortDirections: ["ascend", "descend", "ascend"] }),
}));

const skeletonColumns = (sortField, sortOrder) =>
    buildColumns(sortField, sortOrder).map((col) => ({
        ...col,
        render: () => <Skeleton.Button size="small" block={true}/>,
        sorter: false,
    }));

function CoinsTable({ data, loading = false }) {
    const { sortField, sortOrder, handleTableChange } = useTableSort();

    const isSkeletonMode = loading && !data?.length;

    const sortedData = (() => {
        if (!data?.length || !sortField) return data;

        const field = COINS_SORT_KEY_MAP[sortField];

        if (!field) return data;

        return [...data].sort((a, b) =>
            sortOrder === "ascend" ? a[field] - b[field] : b[field] - a[field]
        );
    })();

    return (
        <Table
            rowKey="id"
            dataSource={isSkeletonMode ? SKELETON_ROWS : sortedData}
            columns={
                isSkeletonMode
                    ? skeletonColumns(sortField, sortOrder)
                    : buildColumns(sortField, sortOrder)
            }
            sticky
            size="middle"
            loading={loading}
            onChange={handleTableChange}
            pagination={false}
        />
    );
}

export default CoinsTable;
