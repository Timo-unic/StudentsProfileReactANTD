import axios, { AxiosError } from "axios";
import { IProfileStudent } from "../models";
import { useEffect, useState } from "react";

export function useStudentAxios() {
    const [students, setStudents] = useState<IProfileStudent[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function addStudent(student: IProfileStudent){
        setStudents(prev => [...prev, student])
    }

    async function fetchStudents() {
        try {
            setError("");
            setLoading(true);
            const response = await axios.get<IProfileStudent[]>(
                "https://localhost:7099/api/StudentProfile/students"
            );
            setStudents(response.data);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    return { students, loading, error,  addStudent };
}