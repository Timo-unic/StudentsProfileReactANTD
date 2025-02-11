import { Button, Form, Input } from "antd";
import { IProfileStudent } from "../../utils/models";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import qs from "qs";

const studentsProfileData: IProfileStudent = {
    firstName: "", //John
    lastName: "", //Doe
    studentLogin: "", //johndoe
    description: "", //I'm a software engineer.
    dateOfBirth: new Date(""), //1990-01-01
};

type ICreateStudentProps = {
    handleCreateStudent: (student: IProfileStudent) => void;
};

const CreateStudentProfile = ({ handleCreateStudent }: ICreateStudentProps) => {
    const [form] = Form.useForm();
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        studentLogin: "",
        description: "",
        dateOfBirth: new Date("MM-DD-YYYY"),
    });
    const [errorinput, setErrorinput] = useState("");
    const [error, setError] = useState("");

    const submitHandler = async () => {
        try {
            // e.preventDefault();  e: React.FormEvent
            setErrorinput("");

            if (
                value.firstName.trim() === "" ||
                value.lastName.trim() === "" ||
                value.studentLogin.trim() === ""
            ) {
                setErrorinput("Please enter a valid value");
                return;
            }

            studentsProfileData.firstName = value.firstName;
            studentsProfileData.lastName = value.lastName;
            studentsProfileData.studentLogin = value.studentLogin;
            studentsProfileData.description = value.description;
            studentsProfileData.dateOfBirth = value.dateOfBirth;

            // const querystring = require('querystring');
            const response = await axios.post<IProfileStudent>(
                "https://localhost:7099/api/StudentProfile/profile",
                qs.stringify(studentsProfileData)
            );
            handleCreateStudent(response.data);
            form.resetFields();
        } catch (e: unknown) {
            const error = e as AxiosError;
            setError(error.message);
        }
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValue((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    return (
        <Form
            onFinish={submitHandler}
            layout={"horizontal"}
            form={form}
            style={{ maxWidth: 600 }}
        >
            <Form.Item label="First Name">
                <Input
                    placeholder="please enter your First Name"
                    value={value.firstName}
                    onChange={changeHandler}
                    name="firstName"
                />
                {value.firstName.trim() === "" && (
                    <span style={{ color: "red" }}>{errorinput}</span>
                )}
            </Form.Item>
            <Form.Item label="Last Name">
                <Input
                    placeholder="please enter your Last Name"
                    value={value.lastName}
                    onChange={changeHandler}
                    name="lastName"
                />
                {value.lastName.trim() === "" && (
                    <span style={{ color: "red" }}>{errorinput}</span>
                )}
            </Form.Item>
            <Form.Item label="Student Login">
                <Input
                    placeholder="please enter your Student Login"
                    value={value.studentLogin}
                    onChange={changeHandler}
                    name="studentLogin"
                />
                {value.studentLogin.trim() === "" && (
                    <span style={{ color: "red" }}>{errorinput}</span>
                )}
            </Form.Item>
            <Form.Item label="Description">
                <Input
                    placeholder="please enter your Description"
                    value={value.description}
                    onChange={changeHandler}
                    name="description"
                />
            </Form.Item>
            <Form.Item label="Date of Birth">
                <Input
                    placeholder="please enter your Date of Birth"
                    value={value.dateOfBirth?.toString()}
                    onChange={changeHandler}
                    name="dateOfBirth"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Create Profile
                </Button>
                {error && (
                    <span style={{ color: "red", marginLeft: "10px" }}>
                        {error}
                    </span>
                )}
            </Form.Item>
        </Form>
    );
};
export default CreateStudentProfile;
