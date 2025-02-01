import { Layout } from "antd";

// type Props = {};
const AppFooter = () => {
    return (
        <Layout.Footer
            style={{
                textAlign: "center",
                background: "silver",
                color: "gray",
                fontWeight: "regular",
            }}
        >
            UNI-Full-Stack-Design ©{new Date().getFullYear()} Created by
            UnicondorTV
        </Layout.Footer>
    );
};
export default AppFooter;
