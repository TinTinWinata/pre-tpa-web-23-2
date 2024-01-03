import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { IMenu, MENU_LIST } from '../settings/menu-setting';
import { Navigation } from '../styled/navigation';

export default function NavBar() {
  return (
    <div
      css={css`
        display: flex;
        gap: 3px;
      `}
    >
      {MENU_LIST.map((menu: IMenu, index: number) => (
        <Navigation key={index}>
          <Link to={menu.path}>{menu.name}</Link>
        </Navigation>
      ))}
    </div>
  );
}
