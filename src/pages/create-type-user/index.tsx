/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@app/components";
import {updateUserRoles} from "@app/store/reducers/user";
import {createNewRole, getRoles, getRoleUserById, updateRole} from "@app/utils";
import {
  ApplicationRootState,
  PermissionI,
  IPermissionRoleUser
} from "@app/utils/types";
import {Button, Checkbox, Input} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";

function CreateTypeUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {id} = useParams<string>();
  const [roleUser, setUserRoles] = useState<IPermissionRoleUser>({
    name: "",
    permissions: [],
    fullAccess: false,
    note: ""
  });

  const dataPermissions: PermissionI[] = useSelector(
    (state: ApplicationRootState) => state.user.dataPermissions
  );

  // create type user

  function onChange(checkedValues: any[]) {
    setUserRoles({...roleUser, permissions: checkedValues});
  }
  const handleNameRole = (e: any) => {
    setUserRoles({...roleUser, name: e.target.value});
  };
  const handleNoteRole = (e: any) => {
    setUserRoles({...roleUser, note: e.target.value});
  };
  const handleCreateNewRoleUser = async () => {
    if (!roleUser.name || roleUser.permissions.length === 0) {
      return alert("please fill the data!");
    }
    try {
      const user = id
        ? await updateRole(roleUser, id)
        : await createNewRole(roleUser);
      toast.success(
        `${id ? "Cập nhật" : "Tạo kiểu"} người dùng ${
          roleUser.name
        } thành công!`
      );
      navigate(`/kieu-nguoi-dung/chi-tiet-kieu-nguoi-dung/${id || user.id}`);
      getRoles();
      const a = await getRoles();
      dispatch(updateUserRoles(a));
    } catch (error: any) {
      toast.error(
        `${id ? "Chỉnh sửa" : "Tạo"} kiểu người dùng ${
          roleUser.name
        } thất bại! Vui lòng thử lại`
      );
      throw new Error(error.message);
    }
  };

  const dataOptions = dataPermissions.map((item: PermissionI) => ({
    label: item.feature,
    value: item.id
  }));

  // edit type user
  useEffect(() => {
    const getData = async () => {
      if (!id) return;
      const data = await getRoleUserById(id);
      setUserRoles({
        ...data,
        permissions: data.permissions.map((item: any) => item.id)
      });
    };
    getData();
  }, [id]);

  return (
    <div className="container-type-user">
      <ContentHeader
        title={`${id ? "Chỉnh sửa kiểu người dùng" : "Tạo kiểu người dùng"}`}
      />
      <section className="content">
        <div className="name-user-box">
          <label htmlFor="name">
            Tên kiểu người dùng <span>(*)</span>
          </label>
          <Input
            value={roleUser.name}
            onChange={handleNameRole}
            id="name"
            placeholder="Nhập tên kiểu người dùng"
          />
        </div>
        <div className="note-box">
          <label htmlFor="note">Ghi chú</label>
          <TextArea
            value={roleUser.note}
            onChange={handleNoteRole}
            rows={4}
            id="note"
            placeholder="Nhập ghi chú..."
          />
        </div>
        <div className="permission-box">
          <p>
            Thêm quyền <span className="more">(*)</span>
          </p>
          <Checkbox.Group
            options={dataOptions}
            value={roleUser.permissions}
            onChange={onChange}
          />
        </div>
        <div className="btn-control">
          <Button className="mr-2" shape="round">
            Hủy
          </Button>
          <Button
            onClick={handleCreateNewRoleUser}
            className="ml-2"
            shape="round"
            type="primary"
          >
            {id ? "Cập nhật" : "Tạo kiểu người dùng"}
          </Button>
        </div>
      </section>
    </div>
  );
}

export default CreateTypeUser;
