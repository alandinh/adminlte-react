/* eslint-disable prettier/prettier */
import React from "react";
import {Modal, Button} from "antd";
import WarningIcon from "../../static/icon/warning.svg";

interface propsDeleteModal {
  isModalVisible: boolean;
  handleOk?: () => void;
  handleCancel: () => void;
  description?: string;
}
const DeleteUserModal = (props: propsDeleteModal) => {
  const {isModalVisible, handleOk, handleCancel, description} = props;
  return (
    <Modal
      className="modal-delete-user"
      title=""
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      width={450}
    >
      <div className="modal-delete-user__body">
        <img src={WarningIcon} alt="icon-warning" />
        <p className="title">Đồng ý</p>
        <p className="des">{description}</p>
      </div>
      <div className="btn-control">
        <Button onClick={handleCancel} className="mr-2">
          Huỷ
        </Button>
        <Button onClick={handleOk} className="ml-2" type="primary">
          Đồng ý
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteUserModal;
