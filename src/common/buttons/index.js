import styled from 'styled-components';

import { block } from '../mixins/mixins';

export const PurpleButton = styled.button`
  ${block}
  display:flex;
  justify-content: center;
  align-items: center;
  background: #785cf9;
  border-radius: 4px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  &:disabled {
    background: transparent;
    border: 1px solid #eff2fd;
    color: #99a4b8;
  }
`;

export const Button = styled.button`
  background: none;
  border: 1px solid #ffffff;
  padding: 0;
  width: 210px;
  height: 40px;
  cursor: pointer;
  outline: inherit;
  border-radius: 6px;
  padding: ${({ p = '0px' }) => p};
  transition: all 0.3s ease 0s;
  color: #ffffff;
  * {
    cursor: pointer !important;
  }
  &:hover {
    transform: scale(1.01);
  }
`;

export const BackButton = styled(Button)`
  border: 1px solid #eff2fd;
  width: 60%;
  color: #99a4b8;
  margin-top: auto;
`;
