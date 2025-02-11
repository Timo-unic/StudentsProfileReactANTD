import { Button, Form, Input } from "antd";
import { useState } from "react";
import { ICourseProfile } from "../../utils/modelCourse";
import axios, { AxiosError } from "axios";
import qs from "qs";

const coursesProfileData: ICourseProfile = {
    groupName: "",
    titleOfCourse: "",
    trener: "",
    startDateOfCourse: new Date(""),
};

type ICreateCourseProps = {
    handleCreateCourse: (courses: ICourseProfile) => void;
};

const CreateCourseProfile = ({ handleCreateCourse }: ICreateCourseProps) => {
    const [form] = Form.useForm();
    const [value, setValue] = useState({
        groupName: "",
        titleOfCourse: "",
        trener: "",
        startDateOfCourse: new Date("MM-DD-YYYY"),
    });

    const [errorinput, setErrorinput] = useState("");
    const [error, setError] = useState("");

    const submitHandler = async () => {
        try {
            // e.preventDefault();  e: React.FormEvent
            setErrorinput("");

            if (
                value.groupName.trim() === "" ||
                value.titleOfCourse.trim() === "" ||
                value.trener.trim() === ""
            ) {
                setErrorinput("Please enter a valid value");
                return;
            }

            coursesProfileData.groupName = value.groupName;
            coursesProfileData.titleOfCourse = value.titleOfCourse;
            coursesProfileData.trener = value.trener;
            coursesProfileData.startDateOfCourse = value.startDateOfCourse;

            // const querystring = require('querystring');
            const response = await axios.post<ICourseProfile>(
                "https://localhost:7099/api/Course/course",
                qs.stringify(coursesProfileData)
            );
            handleCreateCourse(response.data);
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
            <Form.Item label="Group Name">
                <Input
                    placeholder="please enter new Group Name"
                    value={value.groupName}
                    onChange={changeHandler}
                    name="groupName"
                />
                {value.groupName.trim() === "" && (
                    <span style={{ color: "red" }}>{errorinput}</span>
                )}
            </Form.Item>
            <Form.Item label="Title of Course">
                <Input
                    placeholder="please enter Title of Course"
                    value={value.titleOfCourse}
                    onChange={changeHandler}
                    name="titleOfCourse"
                />
                {value.titleOfCourse.trim() === "" && (
                    <span style={{ color: "red" }}>{errorinput}</span>
                )}
            </Form.Item>
            <Form.Item label="Name of Trener">
                <Input
                    placeholder="please enter Name fo Trener for Group"
                    value={value.trener}
                    onChange={changeHandler}
                    name="trener"
                />
                {value.trener.trim() === "" && (
                    <span style={{ color: "red" }}>{errorinput}</span>
                )}
            </Form.Item>
            <Form.Item label="Date for starting of the New Course">
                <Input
                    placeholder="please enter Date for starting of the New Course"
                    value={value.startDateOfCourse?.toString()}
                    onChange={changeHandler}
                    name="startDateOfCourse"
                />
                {/* {value.startDateOfCourse.toDateString() === "" && (
                    <span style={{ color: "red" }}>{errorinput}</span>
                )} */}
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
export default CreateCourseProfile;
