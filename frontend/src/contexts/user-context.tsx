import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../interfaces/user-interface';

interface IUserContext {
  login: (name: string, password: string) => boolean;
  user: IUser | null;
  logout: () => void;
}

const context = createContext({} as IUserContext);

export function UserProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const login = (name: string, password: string) => {
    if (password !== 'tintin') return false;

    // Validate at backend and get the user
    setUser({
      BinusianId: '',
      Major: '',
      Name: name,
      PictureId: '',
      PictureLink: '',
      UserId: '',
      Username: name,
    });
    return true;
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  const data = {
    login,
    user,
    logout,
  };

  return <context.Provider value={data}>{children}</context.Provider>;
}

export default function useUser() {
  return useContext(context);
}
