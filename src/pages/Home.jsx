import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

function Home() {
    return (
        <Card>
            <Title level={2}>Тестове завдання</Title>
            <Paragraph type="secondary">
                Стек: React + Vite + Ant Design + React Router + Axios.
            </Paragraph>
        </Card>
    );
}

export default Home;
