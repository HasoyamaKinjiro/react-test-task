import { theme, Card, Typography } from "antd";
import {
    ResponsiveContainer, AreaChart, Area,
    XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";
import { fmtPrice, fmtCompact } from "../config/helpers";

const { Text } = Typography;

const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <Card size="small">
            <Text type="secondary" style={{ fontSize: 12, display: "block", marginBottom: 4 }}>
                {label}
            </Text>
            <Text strong>{fmtPrice(payload[0].value)}</Text>
        </Card>
    );
};

function CoinsChart({ data = [] }) {
    const { token } = theme.useToken();

    const prices = data.map((d) => d.price);
    const minPrice = prices.length ? Math.min(...prices) : 0;
    const maxPrice = prices.length ? Math.max(...prices) : 0;
    const gap = (maxPrice - minPrice) * 0.1;

    return (
        <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer width="100%" height="400">
                <AreaChart data={data} margin={{ top: 10, right: 16, left: 8, bottom: 0 }}>
                    <defs>
                        <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%"  stopColor={token.colorPrimary} stopOpacity={0.2} />
                            <stop offset="95%" stopColor={token.colorPrimary} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={token.colorBorderSecondary} />
                    <XAxis
                        dataKey="date"
                        tick={{ fontSize: 12, fill: token.colorTextTertiary }}
                        tickLine={false}
                        interval={0}
                        ticks={
                            data
                                .filter((d, i, arr) => i === 0 || d.date !== arr[i - 1].date)
                                .map((d) => d.date)
                        }
                    />
                    <YAxis
                        domain={[minPrice - gap, maxPrice + gap]}
                        tickFormatter={fmtCompact}
                        tick={{ fontSize: 10, fill: token.colorTextTertiary }}
                        tickLine={false}
                        axisLine={false}
                        width={70}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        type="monotone"
                        dataKey="price"
                        stroke={token.colorPrimary}
                        strokeWidth={2}
                        fill="url(#priceGradient)"
                        dot={false}
                        activeDot={{ r: 4 }}
                        isAnimationActive={false}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CoinsChart;
