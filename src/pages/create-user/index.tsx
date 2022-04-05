/* eslint-disable no-return-assign */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@app/components";
import {createNewUser} from "@app/utils";
import {ApplicationRootState, OptionRole} from "@app/utils/types";
import {Button, Input, Select} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import React from "react";

const {Option} = Select;

function CreateUser() {
  const navigate = useNavigate();
  function handleChange(value: string) {
    newUser.roles = [value];
  }

  const newUser: any = {
    fullName: "",
    email: "",
    password: "",
    roles: [],
    phoneNumber: "",
    note: ""
  };

  const dataRoleUser = useSelector(
    (state: ApplicationRootState) => state.user.dataRoles
  );

  const handleInputDataUser = (type: string, e: any) => {
    const {value} = e.target;
    newUser[type] = value;
  };

  const handleCreateUser = async () => {
    if (
      !newUser.fullName ||
      !newUser.email ||
      !newUser.roles ||
      !newUser.password
    )
      return alert("please fill the data!");
    try {
      const user = await createNewUser(newUser);
      toast.success(`Tạo người dùng ${user.fullName} thành công!`);
      return navigate(`/nguoi-dung/chi-tiet-nguoi-dung/${user.id}`);
    } catch (error: any) {
      toast.error("Tạo người dùng thất bại!Vui lòng thử lại");
      throw new Error(error.message);
    }
  };

  const dataOptionsRole: OptionRole[] = dataRoleUser.map((item: any) => ({
    name: item.name,
    value: item.id
  }));

  return (
    <div className="container-create-user">
      <ContentHeader title="Tạo người dùng" />
      <section className="content">
        <div className="form-header">
          <div className="form-header__name">
            <label htmlFor="user-name">
              Họ tên <span>(*)</span>
            </label>
            <Input
              onChange={(e: any) => handleInputDataUser("fullName", e)}
              id="user-name"
              placeholder="Nhập họ tên"
            />
          </div>
          <div className="form-header__email">
            <label htmlFor="user-email">
              Email <span>(*)</span>
            </label>
            <Input
              onChange={(e: any) => handleInputDataUser("email", e)}
              id="user-email"
              placeholder="Nhập email"
            />
          </div>
          <div className="form-header__name">
            <label htmlFor="user-phone">Số điện thoại</label>
            <Input
              onChange={(e: any) => handleInputDataUser("phoneNumber", e)}
              id="user-phone"
              placeholder="Nhập số điện thoại "
            />
          </div>
        </div>
        <div className="form-body">
          <div className="form-body__role">
            <label htmlFor="user-role">
              Vai trò <span>(*)</span>
            </label>
            <Select
              id="user-role"
              placeholder="Chọn vai trò"
              onChange={handleChange}
            >
              {dataOptionsRole.map((item) => (
                <Option key={item.value} value={item.value}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="form-body__pass">
          <label htmlFor="user-pass">
            Mật khẩu <span>(*)</span>
          </label>
          <Input
            type="password"
            onChange={(e: any) => handleInputDataUser("password", e)}
            id="user-pass"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div className="form-footer__note">
          <label htmlFor="user-note">Ghi chú</label>
          <TextArea
            onChange={(e: any) => handleInputDataUser("note", e)}
            id="user-note"
            rows={3}
          />
        </div>
        <div className="btn-control">
          <Button className="mr-2" shape="round">
            Hủy
          </Button>
          <Button
            onClick={handleCreateUser}
            className="ml-2"
            shape="round"
            type="primary"
          >
            Tạo người dùng
          </Button>
        </div>
      </section>
    </div>
  );
}

export default CreateUser;
