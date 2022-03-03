import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {MenuItem} from '@components';

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
        path: '/quan-li-nguoi-dung-1'
      },

      {
        name: 'Kiểu người dùng',
        logo: <i className="ml-3 fas fa-users" />,
        path: '/quan-li-nguoi-dung-2'
      }
    ]
  },
  {
    name: 'Quản lí người chơi',
    logo: <i className="nav-icon fas fa-users" />,
    path: '/m'
  },
  {
    name: 'Quản lí thông tin game',
    logo: <i className="nav-icon fas fa-wrench" />,
    children: [
      {
        name: 'Quản lí 1',
        path: '/sub-1'
      },

      {
        name: 'Quản lí 2',
        path: '/sub-2'
      }
    ]
  },
  {
    name: 'Quản lí thông báo',
    logo: <i className="nav-icon fas fa-envelope" />,
    path: '/a'
  },
  {
    name: 'Quản lí FAQ',
    logo: <i className="nav-icon fas fa-question" />,
    path: '/x'
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
          style={{opacity: '.8'}}
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
        <nav className="mt-2" style={{overflowY: 'hidden'}}>
          <ul
            className={`nav nav-pills nav-sidebar flex-column${
              menuItemFlat ? ' nav-flat' : ''
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
