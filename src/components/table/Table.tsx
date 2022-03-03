/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useRef, useState} from 'react';
import './table.scss';
import useOnClickOutside from '@app/hooks/useClickOutside';
import threeDotIcon from '../../static/icon/threedot.svg';
import MoreAction from '../moreAction/MoreAction';

const dataTable = [
  {
    id: 0,
    name: 'Admin Vận Hành',
    creator: 'LongTT',
    createdDate: '01/01/2022'
  },
  {
    id: 1,
    name: 'Admin 1',
    creator: 'LongTT',
    createdDate: '01/01/2022'
  }
];

function Table() {
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsShowModal(-1));
  const [isShowModal, setIsShowModal] = useState<number>(-1);
  const handleShowModal = (index: number) => {
    setIsShowModal(index);
  };
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className="form-check-input big-checkbox"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </th>
          <th>Kiểu người dùng</th>
          <th>Người tạo</th>
          <th>Ngày tạo</th>
          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {dataTable.map((user, index) => (
          <tr>
            <td>
              <div className="form-check">
                <input
                  className="form-check-input big-checkbox"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </td>
            <td>{user.name}</td>
            <td>{user.creator}</td>
            <td>{user.createdDate}</td>
            <td>
              <div onClick={() => handleShowModal(index)} className="btn">
                <img src={threeDotIcon} alt="icon" />
                <div ref={ref}>{isShowModal === index && <MoreAction />}</div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
