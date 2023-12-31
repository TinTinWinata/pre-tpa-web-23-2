import { css } from '@emotion/react/dist/emotion-react.cjs.d.mts';
import { Fragment } from 'react';
import NavBar from '../components/navbar';

type Theme = {
  secondary: string;
  primary: string;
};

const themes: Theme[] = [
  {
    primary: 'black',
    secondary: 'white',
  },
  {
    primary: 'white',
    secondary: 'black',
  },
];

export default function MainTemplate({ children }: { children: JSX.Element }) {
  const currTheme = themes[0];
  return (
    <Fragment>
      <NavBar />
      <div className={css``}>{children}</div>
    </Fragment>
  );
}
