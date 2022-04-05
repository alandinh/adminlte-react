/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@components";
import TableCustom from "@app/components/table/Table";
import {ListDataNotification} from "@app/utils/types";
import {Select} from "antd";
import ThreeDot, {ItemMoreOption} from "@app/components/btnThreeDot";
import {useNavigate} from "react-router-dom";
import BtnCreate from "@app/components/btnCreate";
import DetailsNotify from "@app/components/modal/Details-notify";
import {useState} from "react";
import watchmoreIcon from "../../../static/icon/watch-more.svg";
import editIcon from "../../../static/icon/edit.svg";
import deleteIcon from "../../../static/icon/delete.svg";

const {Option} = Select;
const ListTypeNotification = () => {
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }
  // state for modal detail
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsShowModal(true);
  };
  const handleOk = () => {
    setIsShowModal(false);
  };
  const handleCancel = () => {
    setIsShowModal(false);
  };
  const data: ListDataNotification[] = [
    {
      id: "1",
      type: "Cập Nhật",
      description: "Dành cho các thông báo liên quan đến cập nhật",
      note: "",
      createdAt: "13:00 - 01/01/2022"
    },
    {
      id: "1",
      type: "Cập Nhật",
      description: "Dành cho các thông báo liên quan đến cập nhật",
      note: "",
      createdAt: "13:00 - 01/01/2022"
    },
    {
      id: "1",
      type: "Cập Nhật",
      description: "Dành cho các thông báo liên quan đến cập nhật",
      note: "",
      createdAt: "13:00 - 01/01/2022"
    }
  ];

  const navigate = useNavigate();

  const listItem: ItemMoreOption[] = [
    {
      key: "detailInfo",
      name: "Xem chi tiết",
      icon: watchmoreIcon,
      onClick: handleOpenModal
    },
    {name: "Chỉnh sửa", icon: editIcon, onClick: handleOpenModal},
    {
      name: "Xóa",
      icon: deleteIcon,
      onClick: () => {
        navigate("/");
      }
    }
  ];
  const columns = [
    {
      title: "Thể loại thông báo",
      dataIndex: "type",
      render: (text: string) => <p>{text}</p>
    },
    {
      title: "Mô tả",
      dataIndex: "description"
    },
    {
      title: "Ghi chú",
      dataIndex: "note"
    },
    {
      title: "Thời gian tạo",
      dataIndex: "createdAt"
    },
    {
      title: "",
      dataIndex: "key",
      render: () => <ThreeDot onChangeID={() => {}} listItem={listItem} />
    }
  ];

  return (
    <div className="list-type-notification">
      <ContentHeader title="Danh sách thể loại thông báo" />
      <DetailsNotify
        isModalVisible={isShowModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        namePopup="thong bao"
        data={[]}
      />
      <section className="content">
        <div className="container-fluid">
          <div className="list-type-notification__header d-flex justify-content-between">
            <div className="box-filter__type-bug">
              <Select
                defaultValue="Thể loại thông báo"
                style={{width: 250}}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div>
              <BtnCreate path="/" content="Tạo thông báo" />
            </div>
          </div>
          <div className="mt-2">
            <TableCustom data={data} columns={columns} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListTypeNotification;
