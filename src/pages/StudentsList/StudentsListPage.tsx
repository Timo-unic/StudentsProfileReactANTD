import StudentProfile from "../../components/StudentProfile/StudentProfile";
import AppIconLoading from "../../components/Loader/AppIconLoading";
import { useStudentAxios } from "../../hooks/studentUseAxios";

// type Props = {}
const StudentsListPage = () => {
    const { students, loading, error } = useStudentAxios();

    return (
        <>
            {(loading || error) && <AppIconLoading error={error} />}
            {students.map((student) => (
                <StudentProfile key={student.id} student={student} />
            ))}
        </>
    );
};
export default StudentsListPage;
