/* eslint-disable react/react-in-jsx-scope */
import {Tabs} from "antd";
import {ContentHeader} from "@components";
import "../../styles/pages/gameinfo.scss";
import TableCustom from "@app/components/table/Table";
import SearchBox from "@app/components/searchbox/SearchBox";
import ThreeDot, {ItemMoreOption} from "@app/components/btnThreeDot";
import DeleteUserModal from "@app/components/modal/DeleteUser";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import editIcon from "../../static/icon/edit.svg";
import TabContent from "./TabContent";
import deleteIcon from "../../static/icon/delete.svg";

const {TabPane} = Tabs;
function callback(key: any) {
  console.log(key);
}
const HeroManager = () => {
  const data: any[] = [
    {
      key: "1",
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      role: "Marketing",
      dateActived: "01/01/2022",
      percent: "0 %",
      totalGold: "20000 Gold",
      status: true
    },
    {
      key: "2",
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      role: "Marketing",
      dateActived: "01/01/2022",
      percent: "0 %",
      totalGold: "20000 Gold",
      status: true
    },
    {
      key: "3",
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      role: "Marketing",
      dateActived: "01/01/2022",
      percent: "0 %",
      totalGold: "20000 Gold",
      status: false
    }
  ];
  const navigate = useNavigate();
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
      key: "editInfo",
      name: "Chỉnh sửa",
      icon: editIcon,
      onClick: () => {
        navigate("/");
      }
    },
    {key: "delete", name: "Xóa", icon: deleteIcon, onClick: handleOpenModal}
  ];
  const columns = [
    {
      title: "Pack",
      dataIndex: "name",
      render: (text: string) => <p>{text}</p>
    },
    {
      title: "Giá MXY",
      dataIndex: "email"
    },
    {
      title: "Số Gold nhận được",
      dataIndex: "role"
    },
    {
      title: "Hệ số Discount",
      dataIndex: "dateActived"
    },
    {
      title: "Tỉ lệ Discount",
      dataIndex: "percent"
    },
    {
      title: "Số Gold sau khi Sale",
      dataIndex: "totalGold"
    },
    {
      title: "",
      dataIndex: "key",
      render: () => <ThreeDot onChangeID={() => {}} listItem={listItem} />
    }
  ];
  return (
    <div className="gameinfo">
      <ContentHeader title="Vật phẩm trong game" />
      <DeleteUserModal
        isModalVisible={isShowModal === "delete"}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          <div>
            <TabContent />
          </div>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
      <div className="mt-2">
        <div className="mt-4 mb-4">
          <h5>Danh sách Gold Packs</h5>
        </div>
        <div className="header-box__search mb-4">
          <SearchBox placeholder="Nhập tên gói packs" />
        </div>
        <TableCustom data={data} columns={columns} dataSelection />
      </div>
    </div>
  );
};

export default HeroManager;
