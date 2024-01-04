import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const PrimaryButton = styled.button`
  padding: 10px 30px;
  border-radius: 10px;
  outline: none;
  color: white;
  background-color: #80bcbd;
  border: none;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.15s ease;
  &:hover {
    background-color: #93bcbd;
  }
`;

const Text = styled.h1`
  font-size: 20px;
  margin: 10px;
`;

export default function TutorialPage() {
  const [increment, setIncrement] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const handleClick = () => {
    setIncrement((prev) => prev + 1);
  };
  const handleChange = () => {
    setText((prev) => prev + '0');
  };

  useEffect(() => {
    console.log('[DEBUG] Text : ', text);
  }, [text]);

  useEffect(() => {
    console.log('Jalan setiap increment berubah');
  }, [increment]);

  return (
    <div>
      <PrimaryButton onClick={handleClick}>Increment</PrimaryButton>
      <Text>{increment}</Text>
      <PrimaryButton onClick={handleChange}>Change</PrimaryButton>
      <Text>{text}</Text>
    </div>
  );
}
