/* eslint-disable prettier/prettier */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MenuItem } from '@components';
import BugIcon from '../../../static/icon/bug.svg'
import NotiIngameIcon from '../../../static/icon/noti-ingame.svg'
import NotiTypeIcon from '../../../static/icon/noti-type.svg'
import NotiUserIcon from '../../../static/icon/noti-user.svg'
import ItemIcon from '../../../static/icon/item-icon.svg'
import Rank from '../../../static/icon/rank.svg'
import User from '../../../static/icon/user.svg'
import DeveloperBoard from '../../../static/icon/developer_board.svg'

export interface IMenuItem {
  name: string;
  path?: string;
  logo?: React.ReactNode;
  children?: Array<IMenuItem>;
}

export const MENU: IMenuItem[] = [
  {
    name: 'Quản lí người dùng',
    logo: <i className="nav-icon fas fa-users" />,
    children: [
      {
        name: 'Người dùng',
        logo: <i className="ml-3 fas fa-user" />,
        path: '/nguoi-dung'
      },

      {
        name: 'Kiểu người dùng',
        logo: <i className="ml-3 fas fa-users" />,
        path: '/kieu-nguoi-dung'
      }
    ]
  },
  {
    name: 'Quản lí người chơi',
    logo: <i className="nav-icon fas fa-users" />,
    children: [
      {
        name: 'Người chơi',
        logo: <i className="ml-3 fas fa-user" />,
        path: '/nguoi-choi'
      },

      {
        name: 'Nghi vấn vi phạm',
        logo: <i className="ml-3 fas fa-exclamation-triangle" />,
        path: '/Nghi-van-vi-pham'
      }
    ]
  },
  {
    name: 'Quản lí thông tin game',
    logo: <i className="nav-icon fas fa-wrench" />,
    children: [
      {
        name: 'Vật phẩm trong game',
        logo: <img src={ItemIcon} alt="icon-notification" className="ml-3" />,
        path: '/gameinfo-manager-sub1'
      },

      {
        name: 'Rank',
        logo: <img src={Rank} alt="icon-notification" className="ml-3" />,
        path: '/gameinfo-manager-sub2'
      },
      {
        name: 'Level Story',
        logo: <img src={DeveloperBoard} alt="icon-notification" className="ml-3" />,
        path: '/gameinfo-manager-sub3'
      },
      {
        name: 'Hero',
        logo: <img src={User} alt="icon-notification" className="ml-3" />,
        path: '/gameinfo-manager-sub4'
      }
    ]
  },
  {
    name: 'Quản lí thông báo',
    logo: <i className="nav-icon fas fa-envelope" />,
    path: '/quan-li-thong-bao',
    children: [
      {
        name: 'Thông báo trong game',
        logo:  <img src={NotiIngameIcon} alt="icon-notification" className="ml-3" />,
        path: '/quan-li-thong-bao/trong-game'
      },

      {
        name: 'Thể loại thông báo',
        logo:  <img src={NotiTypeIcon} alt="icon-notification" className="ml-3" />,
        path: '/quan-li-thong-bao/the-loai'
      },
      {
        name: 'Thông báo người chơi',
        logo:  <img src={NotiUserIcon} alt="icon-notification" className="ml-3" />,
        path: '/quan-li-thong-bao/nguoi-choi'
      }
    ]
  },
  {
    name: 'Quản lí báo cáo lỗi',
    logo:  <img src={BugIcon} alt="icon-bug" className="mx-1" />,
    path: '/quan-li-bao-cao-loi'
  }
];

const MenuSidebar = () => {
  const user = useSelector((state: any) => state.auth.currentUser);
  const sidebarSkin = useSelector((state: any) => state.ui.sidebarSkin);
  const menuItemFlat = useSelector((state: any) => state.ui.menuItemFlat);
  const menuChildIndent = useSelector((state: any) => state.ui.menuChildIndent);

  return (
    <aside className={`main-sidebar elevation-4 ${sidebarSkin}`}>
      <Link to="/" className="brand-link">
        <img
          src="/img/logo-metaxy.png"
          alt="Metaxy Logo"
          className="pl-4"
          style={{ opacity: '.8' }}
        />
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={user.picture || '/img/default-profile.png'}
              className="img-circle elevation-2"
              alt="User"
            />
          </div>
          <div className="info">
            <Link to="/profile" className="d-block">
              {user.email}
            </Link>
          </div>
        </div>
        <nav className="mt-2" style={{ overflowY: 'hidden' }}>
          <ul
            className={`nav nav-pills nav-sidebar flex-column${menuItemFlat ? ' nav-flat' : ''
              }${menuChildIndent ? ' nav-child-indent' : ''}`}
            role="menu"
          >
            {MENU.map((menuItem: IMenuItem) => (
              <MenuItem key={menuItem.name} menuItem={menuItem} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default MenuSidebar;
