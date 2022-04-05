/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Modal, Button, Select, Input } from "antd";

interface propsDeleteModal {
    isModalVisible: boolean;
    handleOk?: () => void;
    handleCancel?: () => void;
}
const EditErrorModal = (props: propsDeleteModal) => {
    const { Option } = Select;

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    const { isModalVisible, handleOk, handleCancel } = props;
    return (
        <Modal
            className="modal__wrapper modal-detail-error"
            title=""
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={450}
        >
            <div className="modal-detail-error__body">
                <h3 className="modal-detail-error__title">Chỉnh sửa nghi vấn</h3>
                <p className="modal-detail-error__sub-title">Thông tin cơ bản</p>
                <div className="modal-detail-error__content">
                    <p className="title">Tên in-game:</p>
                    <p className="content">Ltrannnn</p>
                </div>
                <div className="modal-detail-error__content">
                    <p className="title">Địa chỉ ví:</p>
                    <p className="content">0x7ef6c419ecabcmdksc9ee</p>
                </div>
                <div className="modal-detail-error__content">
                    <p className="title">Trạng thái:</p>
                    <p className="content">Đang hoạt động</p>
                </div>
                <p className="modal-detail-error__sub-title">Chi tiết</p>
                <div className="modal-detail-error__content">
                    <p className="title">Mã nghi vấn:</p>
                    <p className="content">#001</p>
                </div>
                <div className="modal-detail-error__content">
                    <p className="title">Nghi vấn:  </p>
                    <p className="content">Chi tiêu nhiều trên 1 giao dịch</p>
                </div>
                <div className="modal-detail-error__content">
                    <p className="title">Thời gian phát hiện:</p>
                    <p className="content">13:00 - 01/01/2022</p>
                </div>
                <div className="modal-detail-error__content">
                    <p className="title">Giá trị giao dịch:</p>
                    <p className="content">100000 MXY</p>
                </div>
                <div className="modal-detail-error__content">
                    <p className="title">Đánh giá nghi vấn:</p>
                    <p className="content">0x7ca7e8...572af33f</p>
                </div>
                <div className="modal-detail-error__content">
                    <p className="title">Lần cuối sửa:</p>
                    <p className="content">Chưa cập nhật</p>
                </div>
                <div className="modal-detail-error__content modal-detail-error--select">
                    <p className="title">Đánh giá nghi vấn (*)</p>
                    <Select onChange={handleChange} placeholder="Chọn đánh giá nghi vấn">
                        <Option value="1">An toàn</Option>
                        <Option value="2">Bug</Option>
                        <Option value="3">Vi phạm</Option>
                    </Select>
                </div>
                <div className="modal-detail-error__content modal-detail-error--select">
                    <p className="title">Trạng thái xử lí (*) </p>
                    <Select onChange={handleChange} placeholder="Chọn trạng thái xử lí">
                        <Option value="1">Đã xử lí</Option>
                        <Option value="2">Chưa xử lí</Option>
                    </Select>
                </div>
                <div className="modal-detail-error__content modal-detail-error--select">
                    <p className="title">Phương án xử lí (*) </p>
                    <Input placeholder="Nhập phương án xử lí" />
                </div>
                <div className="modal-detail-error__content modal-detail-error--select">
                    <p className="title">Ghi chú </p>
                    <Input placeholder="Nhập ghi chú" />
                </div>
            </div>
            <div className="btn-control">
                <Button className="mr-2 button-custom" onClick={handleCancel}>Huỷ</Button>
                <Button className="ml-2 button-custom" type="primary">
                    Đồng ý
                </Button>
            </div>
        </Modal >
    );
};

export default EditErrorModal;
