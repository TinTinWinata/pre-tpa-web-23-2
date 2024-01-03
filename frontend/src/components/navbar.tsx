import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import useUser from '../contexts/user-context';
import { IMenu, MENU_LIST } from '../settings/menu-setting';
import { Navigation } from '../styled/navigation';

export default function NavBar() {
  const { pathname } = useLocation();

  const { logout, user } = useUser();

  return (
    <div
      css={css`
        display: flex;
        gap: 3px;
      `}
    >
      {MENU_LIST.map((menu: IMenu, index: number) => (
        <Navigation
          css={css`
            text-decoration: ${pathname
              .toLowerCase()
              .includes(menu.path.toLowerCase())
              ? 'underline'
              : 'none'};
          `}
          key={index}
        >
          <Link to={menu.path}>{menu.name}</Link>
        </Navigation>
      ))}
      {user && (
        <Navigation onClick={logout}>Hi, {user.Name} (Logout ?)</Navigation>
      )}
    </div>
  );
}
