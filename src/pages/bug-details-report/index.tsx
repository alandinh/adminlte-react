/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from 'react';
import BoxComponent, { Info } from '@app/components/boxComponent';
import EditBugReportModal from '@app/components/modal/EditBugReport';
import img from '../../static/images/404.png'

function DetailPlayer() {
  const dataInfo: Info[] = [
    {
      name: 'Mã lỗi:',
      value: '#001'
    },
    {
      name: 'Thể loại lỗi:',
      value: 'Tải game'
    },
    {
      name: 'Địa chỉ ví:',
      value: '0x7ef6c419ecabcmdksc9ee'
    },
    {
      name: 'Tên in-game:',
      value: 'Ltrannn'
    },
    {
      name: 'Ghi chú:',
      value: 'Chưa cập nhật'
    }
  ]
  const dataBugDetails: Info[] = [
    {
      name: 'Tóm tắt:',
      value: 'Lỗi không thể tải game'
    },
    {
      name: 'Các bước tái hiện lỗi:',
      value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: 'Ảnh lỗi:',
      value: <img src={img} alt="img-bug" />
    },
    {
      name: 'Trạng thái xử lí:',
      value: 'Chưa xử lí'
    },
    {
      name: 'Phương án xử lí:',
      value: 'Chưa cập nhật'
    },
    {
      name: 'Ngày đăng tải:',
      value: '01/01/2022'
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
      <BoxComponent title="Thông tin báo cáo lỗi" handleEdit={showModal} listInfo={dataInfo} />
      <BoxComponent title="Thông tin chi tiết lỗi" listInfo={dataBugDetails} />
      <EditBugReportModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default DetailPlayer;
