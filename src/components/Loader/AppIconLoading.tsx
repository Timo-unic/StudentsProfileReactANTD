import { Alert, Flex, Spin } from "antd";

type IErrorProps = {
    error: string;
};
const AppIconLoading = ({ error }: IErrorProps) => {
    return (
        <Flex gap="middle" vertical>
            <Spin tip="Loading..." size="large">
                <Alert
                    message="Alert message title"
                    description={error}
                    type="info"
                />
            </Spin>
        </Flex>
    );
};
export default AppIconLoading;
