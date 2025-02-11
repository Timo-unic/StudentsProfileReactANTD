import { useEffect, useState } from "react";
import { ICourseProfile } from "../utils/modelCourse";
import axios, { AxiosError } from "axios";

// type Props = {}
export default function useCourseAxios() {
    const [courses, setCourses] = useState<ICourseProfile[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorCourse, setErrorCourse] = useState("");

    async function fetchCourses() {
        try {
            setErrorCourse("");
            setLoading(true);
            const request = await axios.get<ICourseProfile[]>(
                "https://localhost:7099/api/Course/courses"
            );
            setCourses(request.data);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setErrorCourse(error.message);
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchCourses();
    }, []);

    const addItemCourse = (course: ICourseProfile) => {
        setCourses((prev) => [...prev, course]);
    };
  return { courses, loading, errorCourse, addItemCourse}
}