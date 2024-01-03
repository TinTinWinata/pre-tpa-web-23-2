import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import TutorialPage from '../pages/tutorial';

export interface IMenu {
  name: string;
  path: string;
  element: JSX.Element | null;
}

export const MENU_LIST: IMenu[] = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'Login',
    path: '/login',
    element: <LoginPage />,
  },
  {
    name: 'Tutorial',
    path: '/tutorial',
    element: <TutorialPage />,
  },
];
