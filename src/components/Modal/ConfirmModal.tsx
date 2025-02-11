import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";

type IModalConfirmProps = {
    isModalOpen: boolean;
    handleCancel: () => void;
    HandleClickRemove: () => void;
    error?: string; // error message if any, else undefined.
};

const ConfirmModal = ({
    HandleClickRemove,
    error,
    handleCancel,
    isModalOpen,
}: IModalConfirmProps) => {
    return (
        <>
            <Modal
                title={
                    <>
                        <ExclamationCircleOutlined
                            style={{ color: "orange" }}
                        />{" "}
                        Confirm
                    </>
                }
                open={isModalOpen}
                onCancel={handleCancel}
                onOk={HandleClickRemove}
                className="m-16"
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        danger
                        onClick={HandleClickRemove}
                    >
                        Remove
                    </Button>,
                ]}
            >
                <div className="m-14">
                    Are You sure that You want to delete this Student?
                </div>
                {error && (
                    <span style={{ color: "red", marginLeft: "10px" }}>
                        {error}
                    </span>
                )}
            </Modal>
        </>
    );
};
export default ConfirmModal;
