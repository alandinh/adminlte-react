/* eslint-disable prettier/prettier */
import React from "react";
import {Modal, Button} from "antd";

export interface dataRow {
  title: string;
  value: string;
}
interface propsDeleteModal {
  isModalVisible: boolean;
  handleOk?: () => void;
  handleCancel?: () => void;
  namePopup: string;
  data: dataRow[];
  isShowbtn?: boolean;
}
const DetailsNotify = (props: propsDeleteModal) => {
  const {
    isModalVisible,
    handleOk,
    handleCancel,
    namePopup,
    data,
    isShowbtn = false
  } = props;
  return (
    <Modal
      className="modal-detail-notify"
      title={namePopup}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={550}
    >
      <div className="modal-detail-notify__header">
        <p>Thông tin cơ bản</p>
      </div>
      <div className="modal-detail-notify__body">
        {data.map((item) => (
          <div className="modal-detail-notify__body--box">
            <p className="title">{item.title}</p>
            <p className="value">{item.value}</p>
          </div>
        ))}
      </div>
      {isShowbtn && (
        <div className="btn-control">
          <Button className="mr-2">Huỷ</Button>
          <Button className="ml-2" type="primary">
            Chỉnh sửa
          </Button>
        </div>
      )}
    </Modal>
  );
};

export default DetailsNotify;
