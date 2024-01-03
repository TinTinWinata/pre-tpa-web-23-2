import styled from '@emotion/styled';

interface ITextField {
  label?: string;
  name: string;
  type?: string;
}

export default function TextField({ label, name, type }: ITextField) {
  const Input = styled.input`
    padding: 10px 5px;
    font-size: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    width: 100%;
    &:focus {
      outline: none;
    }
  `;
  const Label = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 3px;
  `;

  return (
    <div>
      <Label>{label}</Label>
      <Input type={type ? type : 'text'} name={name} />
    </div>
  );
}
