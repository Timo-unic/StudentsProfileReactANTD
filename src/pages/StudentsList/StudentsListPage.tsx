import StudentProfile from "../../components/StudentProfile/StudentProfile";
import AppIconLoading from "../../components/Loader/AppIconLoading";
import { useStudentAxios } from "../../hooks/studentUseAxios";
import { Button, Space } from "antd";
import AppModal from "../../components/Modal/AppModal";
import { useEffect, useState } from "react";
import CreateStudentProfile from "../../components/StudentProfile/CreateStudentProfile";
import { IProfileStudent } from "../../utils/models";
import FilterAppInput from "../../components/FilterApp/FilterAppInput";

// type Props = {}
const StudentsListPage = () => {
    const { students, loading, error, addStudent } = useStudentAxios();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [letterSearch, setLetterSearch] = useState("");
    const [filterStudents, setFilterStudents] =
        useState<IProfileStudent[]>(students);

    useEffect(() => {
        setFilterStudents(
            students.filter((s) =>
                s.lastName.toLowerCase().includes(letterSearch.toLowerCase())
            )
        );
    }, [letterSearch, students]);

    const handleLettersChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLetterSearch(event.target.value);
    };

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
                <FilterAppInput
                    letterSearch={letterSearch}
                    handleLettersChange={handleLettersChange}
                />
                <Button type="primary" onClick={showModal}>
                    Add Student Profile
                </Button>
            </Space>
            {(loading || error) && <AppIconLoading error={error} />}

            {filterStudents.map((student) => (
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

// const lettersName = useAppSelector(
//     (state) => state.lettersNameState.filterBy
// );
// import { useAppSelector } from "../../Redux/hooks";

{
    /* .filter((s) => s.lastName.toLowerCase().includes(letters.toLowerCase())) */
}
