/* eslint-disable react/jsx-no-bind */
/* eslint-disable prettier/prettier */
import React from "react";
import { Modal, Button, Input, Select} from "antd";

const {Option} = Select;

interface Props {
  isModalVisible: boolean;
  handleOk?: () => void;
  handleCancel?: () => void;
}
const EditBugReportModal = (props: Props) => {
  const {isModalVisible, handleOk, handleCancel} = props;
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }
  return (
    <Modal
      className="modal-edit-bug-report"
      title="Chỉnh sửa báo cáo lỗi"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={450}
    >
        <div className="modal-edit-bug-report__ body">
            <div className="modal-edit-bug-report__body--status">
                <label htmlFor="status-handle">
                Trạng thái xử lí <span>(*)</span>
                </label>
                <Select
                id="status-handle"
                defaultValue="Chọn trạng thái xử lí"
                onChange={handleChange}
                >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </div>
            <div className="modal-edit-bug-report__body--method">
                <label htmlFor="method">
                    Phương án xử lí <span>(*)</span>
                </label>
                <Input id="method" placeholder="Nhập phương án xử lí" />
            </div>
            <div className="modal-edit-bug-report__body--note">
                <label htmlFor="note-edit">
                 Ghi chú
                </label>
                <Input id="note-edit" placeholder="Nhập ghi chú" />
            </div>
        </div>
        <div className="btn-control">
          <Button className="mr-2">Huỷ</Button>
          <Button className="ml-2" type="primary">
             Cập nhật
          </Button>
        </div>
    </Modal>
  );
};

export default EditBugReportModal;
