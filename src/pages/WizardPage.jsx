import { useState } from "react";
import {
    Form, Input, Select, InputNumber,
    Button, Typography, Descriptions, Flex,
} from "antd";
import { WIZARD_FORM_COUNTRIES } from "../config/constants.js";
import { wizardRules } from "../schemas/wizardSchema.js";

const { Title } = Typography;

function Summary({ values, onReset }) {
    const country = WIZARD_FORM_COUNTRIES.find((c) => c.value === values.country)?.label;

    return (
        <Flex vertical gap={24}>
            <Title level={4} style={{ margin: 0 }}>Submission Summary</Title>
            <Descriptions bordered column={1} size="middle">
                <Descriptions.Item label="Name">{values.name}</Descriptions.Item>
                <Descriptions.Item label="Email">{values.email}</Descriptions.Item>
                <Descriptions.Item label="Country">{country}</Descriptions.Item>
                <Descriptions.Item label="Age">{values.age}</Descriptions.Item>
            </Descriptions>
            <Button onClick={onReset}>Start Over</Button>
        </Flex>
    );
}

function WizardPage() {
    const [form] = Form.useForm();
    const [submitted, setSubmitted] = useState(null);

    const handleFinish = (values) => setSubmitted(values);

    const handleReset = () => {
        form.resetFields();
        setSubmitted(null);
    };

    if (submitted) {
        return (
            <div style={{ maxWidth: 560, margin: "40px auto", padding: "0 24px" }}>
                <Summary values={submitted} onReset={handleReset} />
            </div>
        );
    }

    return (
        <div style={{ maxWidth: 560, margin: "40px auto", padding: "0 24px" }}>
            <Title level={4} style={{ marginBottom: 24 }}>Registration</Title>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                validateTrigger="onBlur"
            >
                <Form.Item label="Name" name="name" rules={wizardRules.name}>
                    <Input placeholder="John Doe" />
                </Form.Item>

                <Form.Item label="Email" name="email" rules={wizardRules.email}>
                    <Input placeholder="john@example.com" />
                </Form.Item>

                <Form.Item label="Country" name="country" rules={wizardRules.country}>
                    <Select
                        placeholder="Select a country"
                        options={WIZARD_FORM_COUNTRIES}
                        showSearch
                        optionFilterProp="label"
                    />
                </Form.Item>

                <Form.Item label="Age" name="age" rules={wizardRules.age}>
                    <InputNumber placeholder="25" style={{ width: "100%" }}/>
                </Form.Item>

                <Form.Item shouldUpdate>
                    {() => {
                        const hasErrors = form
                            .getFieldsError()
                            .some(({ errors }) => errors.length);
                        const isTouched = form.isFieldsTouched(true);

                        return (
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={hasErrors || !isTouched}
                                block
                            >
                                Submit
                            </Button>
                        );
                    }}
                </Form.Item>
            </Form>
        </div>
    );
}

export default WizardPage;
