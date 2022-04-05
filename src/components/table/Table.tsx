import React from "react";
import {Pagination, Spin, Table} from "antd";
import EmptyData from "../emptyData";

interface TableCustomProps {
  loading?: boolean;
  data?: any[];
  columns: any;
  dataSelection?: boolean;
  currentPage?: number;
  setCurrentPage?: any;
  totalData?: number;
}

const TableCustom = (props: TableCustomProps) => {
  const {
    data = [],
    columns,
    dataSelection,
    loading,
    currentPage,
    setCurrentPage,
    totalData
  } = props;

  const handleOnChange = (page: number) => {
    setCurrentPage(page);
  };
  if (loading)
    return (
      <div className="d-flex justify-content-center mt-2">
        <Spin size="large" />
      </div>
    );
  return (
    <>
      {data && data.length > 0 ? (
        <div className="">
          <Table
            tableLayout="fixed"
            className="table-ant"
            rowSelection={dataSelection ? {} : undefined}
            columns={columns}
            dataSource={data.map((item, index) => {
              if (item.key) return item;
              return {...item, key: index};
            })}
            pagination={false}
          />
          <Pagination
            className="pagination-table"
            defaultCurrent={1}
            pageSize={10}
            total={100}
            current={currentPage}
            onChange={handleOnChange}
            showTotal={(total, range) =>
              `Showing ${range[0]}-${range[1]} of ${total} items`
            }
          />
          <p className="total-record">
            Tổng:&nbsp;&nbsp;<span>{totalData} người chơi</span>
          </p>
        </div>
      ) : (
        <EmptyData />
      )}
    </>
  );
};

export default TableCustom;
