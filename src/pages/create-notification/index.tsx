/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@app/components";
import {Button, Input, Select} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

const {Option} = Select;

function CreateNotification() {
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  return (
    <div className="container-create-notification">
      <ContentHeader title="Tạo thông báo" />
      <section className="content">
        <div className="form">
          <div className="form__title">
            <label htmlFor="notification-title">
              Tiêu đề <span>(*)</span>
            </label>
            <Input id="notification-title" placeholder="Nhập tiêu đề" />
          </div>
          <div className="form__type">
            <label htmlFor="notification-type">
              Thể loại <span>(*)</span>
            </label>
            <Select
              id="notification-type"
              defaultValue=""
              placeholder="Chọn thạng thái"
              onChange={handleChange}
            >
              <Option value="jack">Cập nhật</Option>
              <Option value="lucy">Thông báo</Option>
            </Select>
          </div>
        </div>
        <div className="notification__takers">
          <label htmlFor="notification-takers">
            Người nhận <span>(*)</span>
          </label>
          <Select
            mode="multiple"
            allowClear
            id="notification-takers"
            style={{width: "100%"}}
            placeholder="Nhập tên trong game hoặc địa chỉ ví của người chơi"
            defaultValue={[]}
            onChange={handleChange}
          >
            {children}
          </Select>
        </div>

        <div className="notification__content">
          <label htmlFor="notification-content">Nội dung</label>
          <TextArea
            id="notification-content"
            rows={3}
            placeholder="Nhập nội dung"
          />
        </div>
        <div className="notification__note">
          <label htmlFor="notification-note">Ghi chú</label>
          <TextArea
            id="notification-note"
            rows={3}
            placeholder="Nhập ghi chú"
          />
        </div>
        <div className="btn-control">
          <Button className="mr-2" shape="round">
            Hủy
          </Button>
          <Button className="ml-2" shape="round" type="primary">
            Lưu bản nháp
          </Button>
          <Button className="ml-2" shape="round" type="primary">
            Tạo thông báo
          </Button>
        </div>
      </section>
    </div>
  );
}

export default CreateNotification;
