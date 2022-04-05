/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@components";
import TableCustom from "@app/components/table/Table";
import SearchBox from "@app/components/searchbox/SearchBox";
import {INotification, ITypeAction} from "@app/utils/types";
import {Select, DatePicker} from "antd";
import ThreeDot, {ItemMoreOption} from "@app/components/btnThreeDot";
import {useEffect, useState} from "react";
import {
  formatTime,
  getDetailNotification,
  getNotifications,
  shortAddress
} from "@app/utils";
import DetailsNotify, {dataRow} from "@app/components/modal/Details-notify";
import watchmoreIcon from "../../../static/icon/watch-more.svg";

const {Option} = Select;
const {RangePicker} = DatePicker;
const NotificationUsers = () => {
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }
  const [dataNotifications, setNotifications] = useState<INotification[]>();
  const [detailNotification, setDetailNotification] = useState<INotification>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getNotifications();
      setNotifications(data);
      setLoading(false);
    };
    getData();
  }, []);

  const setIdAndGetDetailNotification = async (id: string) => {
    const data: INotification = await getDetailNotification(id);
    setDetailNotification(data);
  };
  // state for modal detail
  const [isShowModal, setIsShowModal] = useState<string>();
  const handleOpenModal = (value?: string) => {
    setIsShowModal(value);
  };
  const handleOk = () => {
    setIsShowModal("");
  };
  const handleCancel = () => {
    setIsShowModal("");
  };

  const listItem: ItemMoreOption[] = [
    {
      key: "detailInfo",
      name: "Xem chi tiết",
      icon: watchmoreIcon,
      onClick: handleOpenModal
    }
  ];
  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "data",
      render: (data: any) => JSON.parse(data).title
    },
    {
      title: "Thể loại Thông báo",
      dataIndex: "type",
      render: (type: ITypeAction) => type?.name
    },
    {
      title: "Địa chỉ ví",
      dataIndex: "address",
      render: (address: string) => shortAddress(address)
    },
    {
      title: "Người đăng",
      dataIndex: "id",
      render: (id: string) => shortAddress(id)
    },
    {
      title: "Đến từ",
      dataIndex: "platform"
    },
    {
      title: "Thời gian tạo",
      dataIndex: "createdAt",
      render: (date: string) => <p>{formatTime(date)}</p>
    },
    {
      title: "",
      dataIndex: "id",
      render: (id: string) => (
        <ThreeDot
          onChangeID={() => setIdAndGetDetailNotification(id)}
          listItem={listItem}
        />
      )
    }
  ];
  const dataNoti: dataRow[] = [
    {
      title: "Tiêu đề:",
      value: detailNotification && JSON.parse(detailNotification.data).title
    },
    {
      title: "Thể loại thông báo:",
      value:
        detailNotification &&
        detailNotification.type &&
        detailNotification.type?.name
    },
    {
      title: "Địa chỉ ví:",
      value: detailNotification?.address
    },
    {
      title: "Đến từ:",
      value: detailNotification?.platform
    },
    {
      title: "Mô tả:",
      value:
        detailNotification && JSON.parse(detailNotification.data).description
    },
    {
      title: "Trạng thái:",
      value: detailNotification?.readed ? "Đã đọc" : "Chưa đọc"
    },
    {
      title: "Thời gian tạo:",
      value: detailNotification && formatTime(detailNotification?.timeUTC)
    }
  ];
  return (
    <div className="list-user-page">
      <ContentHeader title="Danh sách người dùng" />
      <DetailsNotify
        isModalVisible={isShowModal === "detailInfo"}
        handleOk={handleOk}
        handleCancel={handleCancel}
        namePopup="Chi tiết thể loại thông báo"
        data={dataNoti}
      />
      <section className="content">
        <div className="container-fluid">
          <div className="header-box">
            <div className="header-box__search">
              <SearchBox placeholder="Nhập họ tên hoặc email của người dùng" />
            </div>
          </div>
          <div className="box-filter">
            <div className="box-filter__date">
              <RangePicker />
            </div>
            <div className="box-filter__left">
              <Select
                placeholder="Nền tảng"
                style={{width: 180, marginLeft: "20px"}}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className="box-filter__right">
              <Select
                placeholder="Thể loại thông báo"
                style={{width: 200}}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className="box-filter__right">
              <Select
                placeholder="Trạng thái"
                style={{width: 120, marginLeft: "20px"}}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
          <div className="mt-2">
            <TableCustom
              data={dataNotifications}
              columns={columns}
              loading={loading}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotificationUsers;
