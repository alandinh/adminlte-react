/* eslint-disable jsx-a11y/alt-text */

import React, {useEffect, useState} from "react";
import BoxComponent, {Info} from "@app/components/boxComponent";
import {useNavigate, useParams} from "react-router-dom";
import {formatTimeByDay, getUserById} from "@app/utils";
import {DataUser} from "@app/utils/types";

function DetailUser() {
  // get id user
  const {id} = useParams<string>();
  const [dataUser, setDataUser] = useState<DataUser>();

  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      const data = await getUserById(id);
      setDataUser(data);
    };
    getData();
  }, [id]);

  const dataInfo: Info[] = [
    {
      name: "Họ tên",
      value: dataUser?.fullName
    },
    {
      name: "Số điện thoại:",
      value: dataUser?.phoneNumber
    },
    {
      name: "Email:",
      value: dataUser?.email
    },
    {
      name: "Vai trò:",
      value: dataUser?.note
    }
  ];
  const dataNotificationBasic: Info[] = [
    {
      name: "Trạng thái:",
      value: dataUser?.isActive ? "Đang hoạt động" : "Chua hoạt động"
    },
    {
      name: "Ghi chú:",
      value: dataUser?.note
    },
    {
      name: "Ngày tham gia:",
      value: dataUser?.createdAt ? formatTimeByDay(dataUser?.createdAt) : ""
    }
  ];
  const naviagte = useNavigate();
  const handleEdit = () => naviagte(`/chinh-sua-nguoi-dung/${id}`);
  return (
    <div className="container-fuild">
      <BoxComponent
        title="Thông tin người dùng"
        handleEdit={handleEdit}
        listInfo={dataInfo}
      />
      <BoxComponent title="Thông tin cơ bản" listInfo={dataNotificationBasic} />
    </div>
  );
}

export default DetailUser;
