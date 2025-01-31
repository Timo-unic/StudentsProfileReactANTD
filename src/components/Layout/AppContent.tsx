import { Layout, theme } from "antd";

// type Props = {};
const AppContent = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout.Content style={{ padding: "0 48px" }}>
            {/* <Breadcrumb style={{ margin: "10px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
                style={{
                    padding: 24,
                    height: "100vh",
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                Content
            </div>
        </Layout.Content>
    );
};
export default AppContent;
