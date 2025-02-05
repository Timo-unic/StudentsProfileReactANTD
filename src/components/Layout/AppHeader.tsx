import { Layout } from "antd";
import AppMenu from "../Menu/AppMenu";
// import FilterAppInput from "../FilterApp/FilterAppInput";

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
            {/* <FilterAppInput /> */}
        </Layout.Header>
    );
};
export default AppHeader;
