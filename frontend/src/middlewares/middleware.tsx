import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Middleware() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, []);
  return <div>Page load</div>;
}
