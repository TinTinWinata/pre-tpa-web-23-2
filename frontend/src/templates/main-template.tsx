import { ThemeProvider, css } from '@emotion/react';
import { useState } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import NavBar from '../components/navbar';

export interface ITheme {
  secondary: string;
  primary: string;
}

const themes: ITheme[] = [
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
  const [currThemeIdx, setCurrThemeIdx] = useState(1);

  const changeTheme = () => {
    setCurrThemeIdx((prev) => (prev === themes.length - 1 ? 0 : prev + 1));
  };
  const currTheme = themes[currThemeIdx];

  return (
    <ThemeProvider theme={currTheme}>
      <div
        css={css`
          width: 100%;
          justify-content: center;
          display: flex;
          align-item: center;
          min-height: 100vh;
          background-color: ${currTheme.primary};
          color: ${currTheme.secondary};
        `}
      >
        <div
          css={css`
            max-width: 1024px;
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;
          `}
        >
          <div
            css={css`
              cursor: pointer;
              padding: 15px 0px;
            `}
            onClick={changeTheme}
          >
            <FaRegLightbulb />
          </div>
          <NavBar />
          <div
            css={css`
              margin: 20px;
              width: 100%;
            `}
          >
            {children}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
