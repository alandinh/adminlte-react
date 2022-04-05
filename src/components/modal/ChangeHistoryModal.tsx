import React from "react";
import { Modal, Table } from "antd";

export interface dataHistoryItem {
    key: string;
    numberChange: string;
    title: string;
    statusSolution: boolean;
    action: string;
    note: string;
    lastUpdate: string;
    userChange: string;
}


interface propsChangeHistoryModal {
    isModalVisible: boolean;
    handleOk?: () => void;
    handleCancel?: () => void;
    dataHistory: dataHistoryItem[];
    columnHistory: any;

}
const ChangeHistoryModal = (props: propsChangeHistoryModal) => {

    const { isModalVisible, handleOk, handleCancel, dataHistory, columnHistory } = props;
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
                <h3 className="modal-detail-error__title">Lịch sử thay đổi</h3>
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
            </div>
            <p className="modal-detail-error__sub-title">Thông tin cơ bản</p>
            <div className="modal-detail-error__table">
                <Table dataSource={dataHistory} columns={columnHistory} pagination={false} />
            </div>
        </Modal>
    );
};

export default ChangeHistoryModal;
