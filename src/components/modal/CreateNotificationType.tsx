/* eslint-disable react/jsx-no-bind */
/* eslint-disable prettier/prettier */
import React from "react";
import {Modal, Button, Input} from "antd";

interface Props {
  isModalVisible: boolean;
  handleOk?: () => void;
  handleCancel?: () => void;
}
const CreateNotificationType = (props: Props) => {
  const {isModalVisible, handleOk, handleCancel} = props;

  return (
    <Modal
      className="modal-create-notification-type"
      title="Tạo thể loại thông báo"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={550}
    >
      <div className="modal-create-notification-type__body">
        <div className="modal-create-notification-type__body--type">
          <label htmlFor="notification-type">
            Thể loại thông báo <span>(*)</span>
          </label>
          <Input id="notification-type" placeholder="Nhập thể loại thông báo" />
        </div>
        <div className="modal-create-notification-type__body--des">
          <label htmlFor="notification-des">Mô tả</label>
          <Input id="notification-des" placeholder="Nhập mô tả" />
        </div>
        <div className="modal-create-notification-type__body--note">
          <label htmlFor="notification-note">Ghi chú</label>
          <Input id="notification-note" placeholder="Nhập ghi chú" />
        </div>
      </div>
      <div className="btn-control">
        <Button className="mr-2">Huỷ</Button>
        <Button className="ml-2" type="primary">
          Tạo thể loại
        </Button>
      </div>
    </Modal>
  );
};

export default CreateNotificationType;
