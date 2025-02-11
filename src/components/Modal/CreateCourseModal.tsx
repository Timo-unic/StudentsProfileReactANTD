import { Modal } from "antd";

import React from "react";

type IModalCourseProps = {
    children: React.ReactNode;
    title: string;
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
};

const CreateCourseModal = ({
    children,
    title,
    isModalOpen,
    handleOk,
    handleCancel,
}: IModalCourseProps) => {
    return (
        <>
            <Modal
                title={title}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                {children}
            </Modal>
        </>
    );
};
export default CreateCourseModal;
