import React from 'react'
import { ContentHeader } from '@app/components'
// import { Input } from 'antd'
// import TextArea from 'antd/lib/input/TextArea'



const EditProfile = () => {
    return (
        <div className="container-fluid edit-user">
            <ContentHeader title="Chỉnh sửa người dùng" />
            <div className="edit-user__content">
                <div className="edit-user__items">
                    <div className="edit-user__input">
                        <p className="title">Họ tên (*)</p>
                        {/* <Input
                        onChange={(e) => handleInputDataUser("fullName", e)}
                        defaultValue={dataUser?.fullName}
                    /> */}
                    </div>
                    <div className="edit-user__input">
                        <p className="title">Email (*)</p>
                        {/* <Input disabled defaultValue={dataUser?.email} /> */}
                    </div>
                    <div className="edit-user__input">
                        <p className="title">Số điện thoại</p>
                        {/* <Input
              onChange={(e) => handleInputDataUser("phoneNumber", e)}
              defaultValue={dataUser?.phoneNumber}
            /> */}
                    </div>
                </div>
                <div className="edit-user__items">
                    <div className="edit-user__select">
                        <p className="title">Vai trò (*)</p>
                        {/* <Select
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder="Please select roles"
                        defaultValue={dataUser?.roles?.map((item: any) => item.id)}
                        onChange={handleChangeSelect}
                    >
                        {dataOptionsRole.map((item) => (
                            <Option key={item.value} value={item.value}>
                                {item.name}
                            </Option>
                        ))}
                    </Select> */}
                    </div>
                    <div className="edit-user__select">
                        <p className="title">
                            Trạng thái <span>(*)</span>
                        </p>
                        {/* <Select defaultValue="1">
                        <Option value="1">Đang hoạt động</Option>
                        <Option value="2">Không hoạt động</Option>
                    </Select> */}
                    </div>
                </div>
                <div className="edit-user__items">
                    <div className="edit-user__text-area">
                        <p className="title">Ghi chú</p>
                        {/* <TextArea
                        onChange={(e) => handleInputDataUser("note", e)}
                        placeholder="Nhập ghi chú..."
                        rows={3}
                    /> */}
                    </div>
                </div>
                <div className="btn-control d-flex justify-content-center">
                    {/* <Button className="mr-2 button-custom">Huỷ</Button>
                <Button
                    onClick={handleUpdateUser}
                    className="ml-2 button-custom"
                    type="primary"
                >
                    Cập nhật
                </Button> */}
                </div>
            </div>
        </div>
    );
}

export default EditProfile
