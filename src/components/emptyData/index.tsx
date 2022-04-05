/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import EmptyImg from "../../static/images/404.png";
import React from "react";

function EmptyData() {
  return (
    <div className="empty-data-container">
      <div className="box-overview">
        <p>
          Tổng: <span>0 kiểu người dùng</span>
        </p>
      </div>
      <div className="container-nodata">
        <div className="box-nodata">
          <img src={EmptyImg} alt="empty-user" />
          <p>Chưa có kiểu người dùng nào trong hệ thống</p>
        </div>
      </div>
    </div>
  );
}

export default EmptyData;
