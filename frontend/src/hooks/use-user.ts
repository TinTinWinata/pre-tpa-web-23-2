import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export function useLoad<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetch = async () => {
    setLoading(true);
    const res: AxiosResponse<T[]> = await axios.get(
      import.meta.env.VITE_BACKEND_URL + endpoint
    );
    if (res.status === 200) {
      setData(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { data, isLoading };
}
