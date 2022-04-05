/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-bind */
import {ContentHeader} from "@components";
import TableCustom from "@app/components/table/Table";
import {DataNotificationInGame} from "@app/utils/types";
import {DatePicker, Input, Select} from "antd";
import ThreeDot, {ItemMoreOption} from "@app/components/btnThreeDot";
import {useNavigate} from "react-router-dom";
import BtnCreate from "@app/components/btnCreate";
import watchmoreIcon from "../../../static/icon/watch-more.svg";

const {Option} = Select;
const NotificationInGame = () => {
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  const data: DataNotificationInGame[] = [
    {
      id: "1",
      title: "Bản cập nhật mới",
      type: "Cập Nhật",
      to: "Tất cả",
      reporter: "Ltrannn",
      note: "",
      createdAt: "13:00 - 01/01/2022",
      status: true
    },
    {
      id: "2",
      title: "Bản cập nhật mới",
      type: "Cập Nhật",
      to: "Tất cả",
      reporter: "Ltrannn",
      note: "",
      createdAt: "13:00 - 01/01/2022",
      status: false
    },
    {
      id: "3",
      title: "Bản cập nhật mới",
      type: "Cập Nhật",
      to: "Tất cả",
      reporter: "Ltrannn",
      note: "",
      createdAt: "13:00 - 01/01/2022",
      status: true
    }
  ];

  const navigate = useNavigate();

  const listItem: ItemMoreOption[] = [
    {
      key: "detailInfo",
      name: "Xem chi tiết",
      icon: watchmoreIcon,
      onClick: () => {
        navigate("/quan-li-thong-bao/trong-game/chi-tiet-thong-bao");
      }
    }
  ];
  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      render: (text: string) => <p>{text}</p>
    },
    {
      title: "Thể loại Thông báo",
      dataIndex: "type"
    },
    {
      title: "Tới",
      dataIndex: "to"
    },
    {
      title: "Người đăng",
      dataIndex: "reporter"
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
      title: "Trạng thái",
      dataIndex: "status",
      render: (status: boolean) => (
        <>
          {status ? (
            <div className="status-actived">Đã xử lí</div>
          ) : (
            <div className="status-not-active">Chưa xử lí</div>
          )}
        </>
      )
    },
    {
      title: "",
      dataIndex: "key",
      render: () => <ThreeDot onChangeID={() => {}} listItem={listItem} />
    }
  ];
  return (
    <div className="list-bug-report">
      <ContentHeader title="Danh sách thông báo" />
      <section className="content">
        <div className="container-fluid">
          <div className="list-bug-report__header">
            <div className="box-filter">
              <div className="box-filter__date">
                <Input.Group compact>
                  <DatePicker.RangePicker
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginRight: "10px"
                    }}
                  />
                </Input.Group>
              </div>
              <div className="box-filter__type-bug">
                <Select
                  defaultValue="Thể loại thông báo"
                  style={{width: 180}}
                  onChange={handleChange}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div className="box-filter__status">
                <Select
                  defaultValue="Trạng thái"
                  style={{width: 120}}
                  onChange={handleChange}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
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

export default NotificationInGame;
