import styled from '@emotion/styled';
import { ITheme } from '../templates/main-template';

export const PrimaryButton = styled.button<{ theme: ITheme }>`
  padding: 14px 8px;
  cursor: pointer;
  font-weight: 800;
  border: none;
  border-radius: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
`;
