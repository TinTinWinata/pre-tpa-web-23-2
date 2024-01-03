import { css } from '@emotion/react';
import { IUser } from '../interfaces/user-interface';

interface IUserCard {
  user: IUser;
}
export default function UserCard({ user }: IUserCard) {
  return (
    <div
      css={css`
        padding: 10px;
        display: flex;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        flex-direction: column;
        align-item: center;
        justify-content: center;
      `}
    >
      <img
        css={css`
          border-radius: 10px;
          margin: 10px;
          height: 100%;
        `}
        src={user.PictureLink}
      />
      <div
        css={css`
          text-align: center;
        `}
      >
        <div
          css={css`
            font-size: 20px;
            font-weight: 700;
          `}
        >
          {user.Username}
        </div>
        <div
          css={css`
            text-overflow: ellipsis;
            font-weight: 500;
          `}
        >
          {user.Name}
        </div>
        <div>( {user.Major} )</div>
      </div>
    </div>
  );
}
