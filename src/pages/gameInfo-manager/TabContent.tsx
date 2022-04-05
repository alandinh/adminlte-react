/* eslint-disable react/react-in-jsx-scope */
import {Link} from 'react-router-dom';
import EditIcon from '../../static/icon/edit.svg';
import '../../styles/pages/gameinfo.scss';

interface DataType {
  // eslint-disable-next-line no-undef
  key: React.Key;
  title: string;
  value: string;
}

const data: DataType[] = [
  {
    key: '1',
    title: 'Tỉ lệ chuyển đổi MXY -> Gold ',
    value: '300 Gold'
  },
  {
    key: '2',
    title: 'Tổng số',
    value: '6 packs'
  },
  {
    key: '3',
    title: 'Ghi chú',
    value: 'Chưa cập nhật'
  }
];
const renderContent = (data: DataType[]) => {
  const rs: any = [];
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < data.length; index++) {
    rs.push(
      <div key={data[index].key}>
        <span className="title">{data[index].title}:</span>
        <span className="value ml-4">{data[index].value}</span>
      </div>
    );
  }
  return rs;
};
const TabContent = () => {
  return (
    <div>
      <div className="tab">
        <div className="tab-head">
          <div className="title-head-tab">Thông tin về Gold</div>
          <div className="action">
            <Link
              to="/kieu-nguoi-dung/tao-kieu-nguoi-dung"
              className="action__btn"
            >
              <img src={EditIcon} alt="icon" />
              <p>Chỉnh sửa</p>
            </Link>
          </div>
        </div>
        <div className="tab-content">
          {renderContent(data)}
          <div />
        </div>
      </div>
    </div>
  );
};

export default TabContent;
