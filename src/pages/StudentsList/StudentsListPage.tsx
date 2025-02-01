import StudentProfile from "../../components/StudentProfile/StudentProfile";
import { students } from "../../data/studentsPrev";

// type Props = {}
const StudentsListPage = () => {
    return (
        <>
            {students.map((student) => (
                <StudentProfile key={student.id} student={student} />
            ))}
        </>
    );
};
export default StudentsListPage;
