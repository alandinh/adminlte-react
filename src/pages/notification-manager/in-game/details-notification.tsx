/* eslint-disable jsx-a11y/alt-text */

import React, {useState} from "react";
import BoxComponent, {Info} from "@app/components/boxComponent";
import EditBugReportModal from "@app/components/modal/EditBugReport";

function DetailNotificationInGame() {
  const dataInfo: Info[] = [
    {
      name: "Tiêu đề:",
      value: "What’s new in Metaxy v1.0"
    },
    {
      name: "Thể loại:",
      value: "Cập nhật"
    },
    {
      name: "Trạng thái:",
      value: "Bản nháp"
    },
    {
      name: "Ghi chú:",
      value: "Chưa cập nhật"
    }
  ];
  const dataNotificationBasic: Info[] = [
    {
      name: "Người nhận:",
      value: "Tất cả người chơi"
    },
    {
      name: "Nội dung:",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Ngày đăng tải:",
      value: "01/01/2022"
    }
  ];
  // status modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container-fuild">
      <BoxComponent
        title="Thông tin thông báo"
        handleEdit={showModal}
        listInfo={dataInfo}
      />
      <BoxComponent title="Thông tin cơ bản" listInfo={dataNotificationBasic} />
      <EditBugReportModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default DetailNotificationInGame;
