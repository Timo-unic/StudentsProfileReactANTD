import StudentProfile from "../../components/StudentProfile/StudentProfile";
import AppIconLoading from "../../components/Loader/AppIconLoading";
import { useStudentAxios } from "../../hooks/studentUseAxios";
import { Button, Space } from "antd";
import AppModal from "../../components/Modal/AppModal";
import { useState } from "react";
import CreateStudentProfile from "../../components/StudentProfile/CreateStudentProfile";
import { IProfileStudent } from "../../models";
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

// type Props = {}
const StudentsListPage = () => {
    const { students, loading, error, addStudent } = useStudentAxios();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const renderHandleCreateStudent = (student: IProfileStudent) => {
        setIsModalOpen(false);
        addStudent(student);
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
                    Add Student Profile
                </Button>
            </Space>
            {/* <ErrorMessage error={error}/> */}
            {(loading || error) && <AppIconLoading error={error} />}
            {students.map((student) => (
                <StudentProfile key={student.id} student={student} />
            ))}
            {isModalOpen && (
                <AppModal
                    title="Form for Adding Student Profile"
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    isModalOpen={isModalOpen}
                >
                    <CreateStudentProfile
                        handleCreateStudent={renderHandleCreateStudent}
                    />
                </AppModal>
            )}
        </>
    );
};
export default StudentsListPage;
