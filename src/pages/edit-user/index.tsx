/* eslint-disable react/jsx-no-bind */
import React, {useEffect, useState} from "react";
import {ContentHeader} from "@app/components";
import {Button, Input, Select, Spin} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {useNavigate, useParams} from "react-router-dom";
import {ApplicationRootState, DataUser, OptionRole} from "@app/utils/types";
import {editNewUser, getUserById} from "@app/utils";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

const {Option} = Select;

const EditUser = () => {
  const navigate = useNavigate();
  // get id user
  const {id} = useParams<string>();
  const [dataUser, setDataUser] = useState<DataUser>();
  const [loading, setLoading] = useState<boolean>(false);
  const dataRoleUser = useSelector(
    (state: ApplicationRootState) => state.user.dataRoles
  );
  const userEdit: any = {
    fullName: dataUser?.fullName,
    roles: dataUser?.roles,
    phoneNumber: dataUser?.phoneNumber,
    note: dataUser?.note
  };
  // func edit user
  const handleInputDataUser = (type: string, e: any) => {
    const {value} = e.target;
    userEdit[type] = value;
  };
  // handle select for getRoles
  function handleChangeSelect(value: string[]) {
    userEdit.roles = value;
  }
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      if (!id) return;
      const data = await getUserById(id);
      setDataUser(data);
      setLoading(false);
    };
    getData();
  }, [id]);

  const dataOptionsRole: OptionRole[] = dataRoleUser.map((item: any) => ({
    name: item.name,
    value: item.id
  }));
  const handleUpdateUser = async () => {
    if (!userEdit.fullName || !userEdit.roles)
      return alert("please fill the data!");
    try {
      const user = await editNewUser(id, userEdit);
      toast.success(
        `Cập nhật thông tin người dùng ${user.fullName} thành công!`
      );
      return navigate(`/nguoi-dung/chi-tiet-nguoi-dung/${user.id}`);
    } catch (error: any) {
      toast.error("Cập nhật thông tin người dùng thất bại! Vui lòng thử lại");
      throw new Error(error.message);
    }
  };
  if (loading)
    return (
      <div className="d-flex justify-content-center mt-2">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="container-fluid edit-user">
      <ContentHeader title="Chỉnh sửa người dùng" />
      <div className="edit-user__content">
        <div className="edit-user__items">
          <div className="edit-user__input">
            <p className="title">Họ tên (*)</p>
            <Input
              onChange={(e) => handleInputDataUser("fullName", e)}
              defaultValue={dataUser?.fullName}
            />
          </div>
          <div className="edit-user__input">
            <p className="title">Email (*)</p>
            <Input disabled defaultValue={dataUser?.email} />
          </div>
          <div className="edit-user__input">
            <p className="title">Số điện thoại</p>
            <Input
              onChange={(e) => handleInputDataUser("phoneNumber", e)}
              defaultValue={dataUser?.phoneNumber}
            />
          </div>
        </div>
        <div className="edit-user__items">
          <div className="edit-user__select">
            <p className="title">Vai trò (*)</p>
            <Select
              mode="multiple"
              allowClear
              style={{width: "100%"}}
              placeholder="Please select roles"
              defaultValue={dataUser?.roles?.map((item: any) => item.id)}
              onChange={handleChangeSelect}
            >
              {dataOptionsRole.map((item) => (
                <Option key={item.value} value={item.value}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="edit-user__select">
            <p className="title">
              Trạng thái <span>(*)</span>
            </p>
            <Select defaultValue="1">
              <Option value="1">Đang hoạt động</Option>
              <Option value="2">Không hoạt động</Option>
            </Select>
          </div>
        </div>
        <div className="edit-user__items">
          <div className="edit-user__text-area">
            <p className="title">Ghi chú</p>
            <TextArea
              onChange={(e) => handleInputDataUser("note", e)}
              placeholder="Nhập ghi chú..."
              rows={3}
            />
          </div>
        </div>
        <div className="btn-control d-flex justify-content-center">
          <Button className="mr-2 button-custom">Huỷ</Button>
          <Button
            onClick={handleUpdateUser}
            className="ml-2 button-custom"
            type="primary"
          >
            Cập nhật
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
