import { Flex, Spin } from "antd";

function UiSpin({ size = "large" }) {
    return (
        <Flex justify="center" align="center" style={{ minHeight: '300px' }}>
            <Spin size={size} />
        </Flex>
    );
}

export default UiSpin;
