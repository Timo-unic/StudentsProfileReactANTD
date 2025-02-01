import type { MenuProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
    {
        label: <Link to="/">Home</Link>,
        key: "home",
    },
    {
        label: "Additional Info",
        key: "info",
        icon: <CaretDownOutlined />,
        children: [
            {
                label: <Link to="/courses">Courses</Link>,
                key: "courses",
            },
        ],
    },
    {
        label: "Student Profiles",
        key: "students",
        icon: <CaretDownOutlined />,
        children: [
            {
                label: <Link to="/students">Student Profile List</Link>,
                key: "list",
            },
        ],
    },
];

const AppMenu = () => {
    const [current, setCurrent] = useState("home");

    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{
                flex: 1,
                minWidth: 0,
                background: "silver",
                padding: "0 20px",
                color: "black",
                fontWeight: "bold",
            }}
        />
    );
};
export default AppMenu;
