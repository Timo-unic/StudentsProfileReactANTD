import { Card, Space } from "antd";
import { ICourseProfile } from "../../utils/modelCourse";
import RadioApp from "./RadioApp";

type ICourseItemProps = {
    course: ICourseProfile;
};

const CourseProfile = ({ course }: ICourseItemProps) => {
    return (
        <Card
            title={course.titleOfCourse}
            bordered={true}
            style={{ marginBottom: "10px", border: "1px solid silver" }}
        >
            <Space
                style={{
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    Name of the Group:{" "}
                    <span style={{ color: "blue" }}>{course.groupName}</span>{" "}
                </div>
                <div>
                    Trener:{" "}
                    <span style={{ color: "blue" }}>{course.trener}</span>{" "}
                </div>
                <div>
                    This group started cours of:{" "}
                    <span style={{ color: "blue" }}>
                        {course.startDateOfCourse?.toDateString()}
                    </span>
                </div>
            </Space>
            <RadioApp />
        </Card>
    );
};
export default CourseProfile;
