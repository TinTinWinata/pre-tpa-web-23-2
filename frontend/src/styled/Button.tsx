import styled from '@emotion/styled';
import { ITheme } from '../templates/main-template';

export const PrimaryButton = styled.button<{ theme: ITheme }>`
  padding: 20px 8px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
`;
