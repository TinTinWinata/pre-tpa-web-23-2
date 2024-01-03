import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/user-context';
import Middleware from './middlewares/middleware';
import { IMenu, MENU_LIST } from './settings/menu-setting';
import './styles/global.css';
import MainTemplate from './templates/main-template';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <UserProvider>
      <MainTemplate>
        <Routes>
          {MENU_LIST.map((menu: IMenu, key: number) => (
            <Route key={key} element={menu.element} path={menu.path}></Route>
          ))}
          <Route path="/*" element={<Middleware />} />
        </Routes>
      </MainTemplate>
    </UserProvider>
  </BrowserRouter>
);
