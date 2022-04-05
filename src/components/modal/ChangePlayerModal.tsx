/* eslint-disable prettier/prettier */
import React from "react";
import { Select, Modal, Button, Input } from "antd";

const { Option } = Select;
interface propsDeleteModal {
    isModalVisible: boolean;
    handleOk?: () => void;
    handleCancel?: () => void;
}
const ChangePlayerModal = (props: propsDeleteModal) => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const { isModalVisible, handleOk, handleCancel } = props;
    return (
        <Modal
            className="modal__wrapper modal-detail-error"
            title="Chỉnh sửa người chơi"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={450}
        >
            <div className="modal-detail-error__body">
                <div className="modal-detail-error__content modal-detail-error--select">
                    <p className="title">Ghi chú </p>
                    <Input placeholder="Nhập ghi chú" />
                </div>
                <div className="modal-detail-error__content modal-detail-error--select">
                    <p className="title">Trạng thái (*)</p>
                    <Select onChange={handleChange} placeholder="Chọn đánh giá nghi vấn">
                        <Option value="1">Đang hoạt động</Option>
                        <Option value="2">Dừng hoạt động</Option>
                    </Select>
                </div>
                <div className="modal-detail-error__content modal-detail-error--select">
                    <p className="title">Lí do (*) </p>
                    <Input placeholder="Nhập lí do" />
                </div>
            </div>
            <div className="btn-control">
                <Button className="mr-2 button-custom" onClick={handleCancel}>Huỷ</Button>
                <Button className="ml-2 button-custom" type="primary">
                    Lưu
                </Button>
            </div>
        </Modal >
    );
};

export default ChangePlayerModal;
