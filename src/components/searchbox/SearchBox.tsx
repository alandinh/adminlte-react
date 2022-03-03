/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface SearchboxProps {
  placeholder?: string;
}

const SearchBox = (props: SearchboxProps) => {
  const {placeholder} = props;

  const handleSubmit = () => {
    console.log('value');
  };
  return (
    <div className="flex justify-content items-center">
      <div className="input-group w-50">
        <input
          type="search"
          className="form-control rounded mr-2"
          placeholder={placeholder}
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-outline-primary"
        >
          search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
