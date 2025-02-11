import { IProfileStudent } from "../../utils/models";
import {
    DeleteOutlined,
    EditOutlined,
    EllipsisOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Space } from "antd";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import ConfirmModal from "../Modal/ConfirmModal";

const { Meta } = Card;
const paragraphStyle = "text-black font-semibold";

type StudentProfileProps = {
    student: IProfileStudent;
    key?: string;
};
const StudentProfile = ({ student }: StudentProfileProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cards, setCards] = useState<IProfileStudent[]>([student]);
    const [error, setError] = useState("");

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const HandleClickRemove = () =>
        student.id !== undefined && deleteItemsHandler(student.id);

    const deleteItemsHandler = async (id: string): Promise<void> => {
        try {
            const response = await axios.delete(
                `https://localhost:7099/api/StudentProfile/student/${id}`
            );
            if (response.status === 200) {
                const newCards = cards.filter(
                    (card: IProfileStudent) => card.id !== student.id
                );
                setCards(newCards);

                setIsModalOpen(false);
            }
        } catch (e: unknown) {
            const error = e as AxiosError;
            setError(error.message);
        }
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
                    <DeleteOutlined key="delete" onClick={showModal} />,
                ]}
                cover={<img alt={student.lastName} src={student.image} />}
                bordered={true}
            >
                <Meta
                    avatar={<Avatar src={student.image} />}
                    title={student.firstName + " " + student.lastName}
                    description={`Student Login: ${student.studentLogin}`}
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
                        Age of Student:{" "}
                        <span className={paragraphStyle}>{student.age}</span>
                    </p>
                </div>
            </Card>
            <ConfirmModal
                HandleClickRemove={HandleClickRemove}
                error={error}
                handleCancel={handleCancel}
                isModalOpen={isModalOpen}
            />
        </Space>
    );
};
export default StudentProfile;
