import { Layout } from "antd";
import AppMenu from "../Menu/AppMenu";

// type Props = {};
const AppHeader = () => {
    return (
        <Layout.Header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%",
                display: "inline flex",
                alignItems: "center",
                backgroundColor: "silver",
                borderRadius: 8,
            }}
        >
            <div className="text-black font-bold text-lg mr-10">
                Student Profile
            </div>
            <AppMenu />
        </Layout.Header>
    );
};
export default AppHeader;
