/* eslint-disable prettier/prettier */
import React from "react";
import { Modal, Button} from "antd";
import { OptionRole } from "@app/utils/types";

// const {Option} = Select;
interface DeleteTypeModalProps {
  isModalVisible: boolean;
  handleOk?: () => void;
  handleCancel?: () => void;
  dataOptionsRole: OptionRole[];
}
const DeleteUserTypeModal = (props: DeleteTypeModalProps) => {
  // const handleChange = (value: string) => {
  //   console.log(`selected ${value}`);
  // };

  const {isModalVisible, handleOk, handleCancel, dataOptionsRole} = props;
  return (
    <Modal
      className="modal-delete-type-user"
      title="Xoá kiểu người dùng"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={450}
    >
      <div className="modal-delete-type-user__body">
        <p>
        Bạn có muốn xoá kiểu người dùng <span>{dataOptionsRole}</span>
        </p>
        {/* <Select
          defaultValue=""
          style={{width: "100%"}}
          onChange={handleChange}
        >
              {dataOptionsRole.map((item) => (
                <Option key={item.value} value={item.value}>
                  {item.name}
                </Option>
              ))}
        </Select> */}
        <div className="btn-control">
          <Button onClick={handleCancel} className="mr-2">Huỷ</Button>
          <Button onClick={handleOk} className="ml-2" type="primary">
            Lưu
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteUserTypeModal;
