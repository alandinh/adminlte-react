/* eslint-disable react/no-array-index-key */
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
      footer={null}
      width={550}
      onCancel={handleCancel}
    >
      <div className="modal-detail-notify__header">
        <p>Thông tin cơ bản</p>
      </div>
      <div className="modal-detail-notify__body">
        {data.map((item, index) => (
          <div key={index} className="modal-detail-notify__body--box">
            <p className="title">{item.title}</p>
            <p className="value">{item.value}</p>
          </div>
        ))}
      </div>
      {isShowbtn && (
        <div className="btn-control">
          <Button onClick={handleCancel} className="mr-2">
            Huỷ
          </Button>
          <Button onClick={handleOk} className="ml-2" type="primary">
            Chỉnh sửa
          </Button>
        </div>
      )}
    </Modal>
  );
};

export default DetailsNotify;
