/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Search from "antd/lib/input/Search";
import React from "react";

interface SearchboxProps {
  placeholder?: string;
  onSearch?: (e: any) => void;
}

const SearchBox = (props: SearchboxProps) => {
  const {placeholder, onSearch} = props;

  return (
    <Search
      placeholder={placeholder}
      allowClear
      enterButton="Tìm kiếm"
      size="middle"
      onSearch={onSearch}
    />
  );
};

export default SearchBox;
