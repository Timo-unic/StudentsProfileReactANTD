import { Col, Row } from "antd";
import CourseProfile from "../../components/CourseProfile/CourseProfile";
import { courses } from "../../data/courses";

// type Props = {}
const CoursesPage = () => {
    return (
        <Row gutter={16} style={{ display: "flex", justifyContent: "center" }}>
            {courses.map((course) => (
                <Col span={16}>
                    <CourseProfile key={course.id} course={course} />
                </Col>
            ))}
        </Row>
    );
};
export default CoursesPage;
