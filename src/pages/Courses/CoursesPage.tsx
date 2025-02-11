import { Button, Col, Row, Space } from "antd";
import CourseProfile from "../../components/CourseProfile/CourseProfile";
import { courses } from "../../data/courses";
import CreateCourseModal from "../../components/Modal/CreateCourseModal";
import CreateCourseProfile from "../../components/CourseProfile/CreateCourseProfile";
import { useState } from "react";
import { ICourseProfile } from "../../utils/modelCourse";
import AppIconLoading from "../../components/Loader/AppIconLoading";
import useCourseAxios from "../../hooks/useCourseAxios";

// type Props = {}
const CoursesPage = () => {
    const { loading, errorCourse, addItemCourse } = useCourseAxios(); // courses temporary deleted
    const [isModalOpen, setIsModalOpen] = useState(false);

    const renderHandleCreateCourse = (courses: ICourseProfile) => {
        setIsModalOpen(false);
        addItemCourse(courses);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Space
                style={{
                    position: "fixed",
                    top: "70px",
                    right: "50px",
                    zIndex: 50,
                }}
            >
                <Button type="primary" onClick={showModal}>
                    Create New Course
                </Button>
            </Space>
            {(loading || errorCourse) && <AppIconLoading error={errorCourse} />}

            <Row
                gutter={16}
                style={{ display: "flex", justifyContent: "center" }}
            >
                {courses.map((course) => (
                    <Col span={16} key={course.id}>
                        <CourseProfile course={course} />
                    </Col>
                ))}
            </Row>
            {isModalOpen && (
                <CreateCourseModal
                    title="Form for Creating Course"
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    isModalOpen={isModalOpen}
                >
                    <CreateCourseProfile
                        handleCreateCourse={renderHandleCreateCourse}
                    />
                </CreateCourseModal>
            )}
        </>
    );
};
export default CoursesPage;
