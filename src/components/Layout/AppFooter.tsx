import { Layout } from "antd";

// type Props = {};
const AppFooter = () => {
    return (
        <Layout.Footer style={{ textAlign: "center" }}>
            UNI-Full-Stack-Design ©{new Date().getFullYear()} Created by
            UnicondorTV
        </Layout.Footer>
    );
};
export default AppFooter;
