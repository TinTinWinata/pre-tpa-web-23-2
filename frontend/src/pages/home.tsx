import { css } from '@emotion/react';
import { ChangeEvent, useState } from 'react';
import UserCard from '../components/user-card';
import { useLoad } from '../hooks/use-user';
import { IUser } from '../interfaces/user-interface';

export default function HomePage() {
  const { data: users, isLoading: userLoading } = useLoad<IUser>('assistants');

  const [search, setSearch] = useState<string>('');

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value as string);
  };

  const filteredUsers = users.filter(
    (user) => user.Name.includes(search) || user.Username.includes(search)
  );
  if (userLoading) {
    return <>Loading ...</>;
  }
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <input
        onChange={handleChangeSearch}
        type="text"
        placeholder="Search Assistants..."
        css={css`
          width: 400px;
          border-radius: 10px;
          margin-bottom: 10px;
          &:focus {
            outline: none;
          }
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding: 10px;
        `}
      />
      <div
        css={css`
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        `}
      >
        {filteredUsers.map((user: IUser) => (
          <UserCard user={user} key={user.UserId}></UserCard>
        ))}
      </div>
    </div>
  );
}
