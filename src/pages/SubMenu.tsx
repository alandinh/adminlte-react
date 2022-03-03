/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ContentHeader} from '@components';
import SearchBox from '@app/components/searchbox/SearchBox';
import Table from '@app/components/table/Table';

const SubMenu = () => {
  return (
    <div>
      <ContentHeader title="Danh sách kiểu người dùng" />
      <section className="content">
        <div className="container-fluid">
          <SearchBox placeholder="Nhập tên kiểu người dùng" />
        </div>
        <div className="mt-2">
          <Table />
        </div>
      </section>
    </div>
  );
};

export default SubMenu;
