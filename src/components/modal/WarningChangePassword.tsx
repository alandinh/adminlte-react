/* eslint-disable react/no-unused-prop-types */
/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import {Modal, Button} from "antd";
import WarningIcon from "../../static/icon/warning.svg";
import ConfirmChangePassModal from "./ConfirmChangePassword";

interface WarningChangePasswordModalProps {
  isModalVisible: boolean;
  handleOk?: () => void;
  handleCancel: () => void;
}
const WarningChangePassModal = (props: WarningChangePasswordModalProps) => {
  const {isModalVisible, handleOk, handleCancel} = props;
  // state for modal detail
  const [isShowModalConfirmPassword, setIsShowModalConfirmPassword] =
    useState<boolean>(false);
  const handleShowModalConfirm = () => {
    handleCancel();
    setIsShowModalConfirmPassword(true);
  };
  const handleCancelModalConfirm = () => {
    setIsShowModalConfirmPassword(false);
  };
  return (
    <>
      <ConfirmChangePassModal
        isModalVisible={isShowModalConfirmPassword}
        handleOk={handleShowModalConfirm}
        handleCancel={handleCancelModalConfirm}
      />
      <Modal
        className="modal-warning-change-pass"
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={450}
      >
        <div className="modal-delete-user__body">
          <img src={WarningIcon} alt="icon-warning" />
          <p className="title">Đồng ý</p>
          <p className="des">Bạn có muốn làm mới mật khẩu tài khoản này?</p>
        </div>
        <div className="btn-control">
          <Button onClick={handleCancel} className="mr-2">
            Huỷ
          </Button>
          <Button
            onClick={handleShowModalConfirm}
            className="ml-2"
            type="primary"
          >
            Đồng ý
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default WarningChangePassModal;
