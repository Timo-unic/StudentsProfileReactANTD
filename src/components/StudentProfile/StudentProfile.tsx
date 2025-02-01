import { IProfileStudent } from "../../models";
import {
    DeleteOutlined,
    EditOutlined,
    EllipsisOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Space } from "antd";

const { Meta } = Card;
const paragraphStyle = "text-black";

type StudentProfileProps = {
    student: IProfileStudent;
};
const StudentProfile = ({ student }: StudentProfileProps) => (
    <Space
        direction="vertical"
        size={16}
        align="center"
        style={{ margin: "10px" }}
    >
        <Card
            title={`Card namber: ${student.studentCardNumber}`}
            extra={student.additionalInfo && <a href="#">More</a>}
            style={{ width: 500, border: "1px solid #d1d5dc" }}
            actions={[
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                <DeleteOutlined key="delete" />,
            ]}
            cover={<img alt={student.lastName} src={student.image} />}
            bordered={true}
        >
            <Meta
                avatar={<Avatar src={student.image} />}
                title={student.firstName + " " + student.lastName}
                description={`Age: ${student.age}; Student Login: ${student.studentLogin}`}
                style={{ marginBottom: "10px" }}
            />
            <div className="text-neutral-500">
                <p>
                    Description:{" "}
                    <span className={paragraphStyle}>
                        {student.description}
                    </span>
                </p>
                <p>
                    Date of Birth:
                    <span className={paragraphStyle}>
                        {student.dateOfBirth?.toLocaleDateString()}
                    </span>
                </p>
            </div>
        </Card>
    </Space>
);
export default StudentProfile;
