import StudentProfile from "../../components/StudentProfile/StudentProfile";
import AppIconLoading from "../../components/Loader/AppIconLoading";
import { useStudentAxios } from "../../hooks/useStudentAxios";
import { Button, Col, Row, Space } from "antd";
import AppModal from "../../components/Modal/AppModal";
import { useState } from "react";
import CreateStudentProfile from "../../components/StudentProfile/CreateStudentProfile";
import { IProfileStudent } from "../../utils/models";
import FilterAppInput from "../../components/FilterApp/FilterAppInput";
import useFilterName from "../../hooks/useFilterName";

const StudentsListPage = () => {
    const { students, loading, error, addStudent } = useStudentAxios();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const filterName = useFilterName();

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
                <FilterAppInput filterName={filterName} />
                <Button type="primary" onClick={showModal}>
                    Add Student Profile
                </Button>
            </Space>
            {(loading || error) && <AppIconLoading error={error} />}

            <Row gutter={16}>
                {students
                    .filter((student) =>
                        student.lastName
                            .toLowerCase()
                            .includes(filterName.value.toLowerCase())
                    )
                    .map((student) => (
                        <Col span={12} key={student.id}>
                            <StudentProfile student={student} />
                        </Col>
                    ))}
            </Row>
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

//наброски до Редаксу
// const lettersName = useAppSelector(
//     (state) => state.lettersNameState.filterBy
// );
// import { useAppSelector } from "../../Redux/hooks";

{
    /* .filter((s) => s.lastName.toLowerCase().includes(letters.toLowerCase())) */
}
//---filter---
// const [letterSearch, setLetterSearch] = useState("");
// const [filterStudents, setFilterStudents] =
//     useState<IProfileStudent[]>(students);

// useEffect(() => {
//     setFilterStudents(
//         students.filter((s) =>
//             s.lastName.toLowerCase().includes(letterSearch.toLowerCase())
//         )
//     );
// }, [letterSearch, students]);

// const handleLettersChange = (
//     event: React.ChangeEvent<HTMLInputElement>
// ) => {
//     setLetterSearch(event.target.value);
// };
