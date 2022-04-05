import React, { useState } from 'react';
import { useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@store/reducers/auth';
import { Dropdown } from '@components';
import styled from 'styled-components';

const StyledUserImage = styled.img`
  height: 1.6rem !important;
  width: 1.6rem !important;
  margin-right: 0 !important;
  margin-left: -8px !important;
`;

const UserDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.currentUser);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const logOut = (event: any) => {
    event.preventDefault();
    setDropdownOpen(false);
    dispatch(logoutUser());
    navigate('/login');
  };

  const navigateToProfile = (event: any) => {
    event.preventDefault();
    setDropdownOpen(false);
    navigate('/profile');
  };

  return (
    <Dropdown
      isOpen={dropdownOpen}
      onChange={(open: boolean) => setDropdownOpen(open)}
      className="user-menu"
      menuContainerTag="ul"
      buttonTemplate={
        <StyledUserImage
          src={user.picture || '/img/default-profile.png'}
          className="user-image img-circle elevation-2"
          alt="User"
        />
      }
      menuTemplate={
        <>

          <li className="user-footer">
            <button
              type="button"
              className="btn btn-default btn-flat"
              onClick={navigateToProfile}
            >
              Hồ sơ cá nhân
            </button>
            <button
              type="button"
              className="btn btn-default btn-flat float-right"
              onClick={logOut}
            >
              Đăng xuất
            </button>
          </li>
        </>
      }
    />
  );
};

export default UserDropdown;
