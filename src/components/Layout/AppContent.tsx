import { Breadcrumb, Layout, theme } from "antd";
import { Link, Route, Routes } from "react-router";
import HomePage from "../../pages/Home/HomePage";
import CoursesPage from "../../pages/Courses/CoursesPage";
import StudentsListPage from "../../pages/StudentsList/StudentsListPage";

const arrbreadcrumbs = [
    {
        title: <Link to="/">Home</Link>,
    },
    {
        title: <Link to="/courses">Courses</Link>,
    },
    {
        title: <Link to="/students">Student Profile List</Link>,
    },
];

// type RouteProps = {}

const AppContent = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout.Content style={{ padding: "0 48px" }}>
            <Breadcrumb style={{ margin: "10px 0" }} items={arrbreadcrumbs} />
            <div
                style={{
                    padding: 24,
                    height: "100%",
                    minHeight: "100vh",
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="courses" element={<CoursesPage />} />
                    <Route path="students" element={<StudentsListPage />} />
                </Routes>
            </div>
        </Layout.Content>
    );
};
export default AppContent;
