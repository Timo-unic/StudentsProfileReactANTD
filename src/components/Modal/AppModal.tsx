import { Modal } from "antd";

import React from "react";

type IModalProps = {
    children: React.ReactNode;
    title: string;
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
};
const AppModal = ({
    children,
    title,
    isModalOpen,
    handleOk,
    handleCancel,
}: IModalProps) => {
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
export default AppModal;
