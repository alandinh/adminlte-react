import React from 'react';
import watchmoreIcon from '../../static/icon/watch-more.svg';
import editIcon from '../../static/icon/edit.svg';
import deleteIcon from '../../static/icon/delete.svg';
import './more-action.scss';

function MoreAction() {
  return (
    <div className="more-action">
      <div>
        <img src={watchmoreIcon} alt="icon" />
        <p>Xem chi tiết</p>
      </div>
      <div>
        <img src={editIcon} alt="icon" />
        <p>Chỉnh sửa</p>
      </div>
      <div>
        <img src={deleteIcon} alt="icon" />
        <p>Xóa</p>
      </div>
    </div>
  );
}

export default MoreAction;
