import { Typography } from "antd";

const { Text } = Typography;

export const fmtPrice = (v) =>
    "$" + Number(v).toLocaleString("en-US", { maximumFractionDigits: 0 });

export const fmtPercent = (v) => {
    const fixed = Number(v).toFixed(2) + "%";
    return (
        <Text style={{ color: v >= 0 ? "#52c41a" : "#f5222d" }}>
            {v >= 0 ? "+" : ""}
            {fixed}
        </Text>
    );
};

export const fmtCompact = (v) => {
    if (v >= 1e12) return "$" + (v / 1e12).toFixed(2) + "T";
    if (v >= 1e9)  return "$" + (v / 1e9).toFixed(2) + "B";
    if (v >= 1e6)  return "$" + (v / 1e6).toFixed(2) + "M";
    return "$" + Number(v).toLocaleString("en-US");
};
