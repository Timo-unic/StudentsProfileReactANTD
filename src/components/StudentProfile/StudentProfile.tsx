import { IProfileStudent } from "../../utils/models";
import {
    DeleteOutlined,
    EditOutlined,
    EllipsisOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Space, Modal, Button } from "antd";

const { Meta } = Card;
const paragraphStyle = "text-black";

type StudentProfileProps = {
    student: IProfileStudent;
};
const StudentProfile = ({ student }: StudentProfileProps) => {
    const showConfirm = () => {
        Modal.confirm({
            title: "Confirm",
            content: "Are You sure that You want to delete this Student?",
            footer: (_, { CancelBtn }) => (
                <>
                    <CancelBtn />
                    <Button type="primary" danger>
                        Remove
                    </Button>
                    {/* <OkBtn /> */}
                </>
            ),
        });
    };

    return (
        <Space
            direction="vertical"
            size={16}
            align="center"
            style={{ margin: "10px" }}
        >
            <Card
                title={`Card namber: ${student.studentCardNumber}`}
                extra={student.additionalInfo && <a href="#">More</a>}
                style={{
                    minWidth: "calc(100vh - 80px)",
                    border: "1px solid #d1d5dc",
                }}
                actions={[
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    <DeleteOutlined key="delete" onClick={showConfirm} />,
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
                    {/* <p>
                    Date of Birth:
                    <span className={paragraphStyle}>
                        {student.dateOfBirth?.toLocaleDateString()}
                    </span>
                </p> */}
                </div>
            </Card>
        </Space>
    );
};
export default StudentProfile;
