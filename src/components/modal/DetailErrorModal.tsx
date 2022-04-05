import React from "react";
import { Modal, Button } from "antd";

interface propsDeleteModal {
    isModalVisible: boolean;
    handleOk?: () => void;
    handleCancel?: () => void;
}
const DetailErrorModal = (props: propsDeleteModal) => {

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
                <h3 className="modal-detail-error__title">Chi tiết nghi vấn</h3>
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

            </div>
            <div className="btn-control">
                <Button className="mr-2 button-custom" onClick={handleCancel}>Huỷ</Button>
                <Button className="ml-2 button-custom" type="primary">
                    Đồng ý
                </Button>
            </div>
        </Modal>
    );
};

export default DetailErrorModal;
