import styled from 'styled-components';

import { block, flex, transition } from '../mixins/mixins';

export const MainWrapper = styled.main`
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const InputContainer = styled.div`
  ${block}
  position:relative;
  > svg {
    width: ${({ iconSize = 20 }) => `${iconSize}px`};
    height: ${({ iconSize = 20 }) => `${iconSize}px`};
    position: absolute;
    left: ${({ iconSize = 20 }) => `${20 - iconSize / 2}px`};
    top: ${({ iconSize = 20 }) => `calc(50% - ${iconSize / 2}px)`};
    * {
      ${transition}
    }
  }
`;

export const Input = styled.input`
  width: 325px;
  height: 40px;
  transition-property: border;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #eff2fd;
  color: #0e0e0e;
  font-weight: 400;
  font-size: 14px;
  padding: 0 20px 0 40px;
  &:valid {
    border-color: #5dc3f9;
    + svg {
      * {
        stroke: #5dc3f9;
      }
    }
  }
  &:invalid {
    border-color: red;
    + svg {
      * {
        stroke: red;
      }
    }
  }
  + svg {
    stroke-width: 0.5px;
    * {
      stroke: #99a4b8;
    }
  }
  &:placeholder-shown {
    border: 1px solid #eff2fd;
    + svg {
      * {
        stroke: #99a4b8;
      }
    }
    &:focus {
      border-color: #5dc3f9;
      + svg {
        * {
          stroke: #5dc3f9;
        }
      }
    }
  }
  &::placeholder {
    font-weight: 300;
    color: #99a4b8;
  }
  &:-webkit-autofill {
    box-shadow: 0 0 0 30px #ffffff inset !important;
    -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
    -webkit-text-fill-color: #0e0e0e !important;
  }
`;

export const Column = styled.div`
  ${block}
  display:flex;
  flex-direction: column;
  align-items: ${({ align = 'flex-start' }) => align};
`;

export const Row = styled.div`
  ${block}
  ${flex}
  width: 100%;
`;

export const HeaderStyled = styled.header`
  display: flex;
  position: relative;
  width: 100%;
  height: 400px;
  background: linear-gradient(131.2deg, rgba(0, 255, 240, 0.4) 1.23%, rgba(120, 92, 249, 1) 40.74%);
  padding: 22px 150px;
`;

export const FooterContaner = styled.footer`
  position: fixed;
  bottom: 0;
  border: 1px solid #eff2fd;
  height: 90px;
  width: 100%;
  background: #ffffff;
  padding: 36px 160px 36px 150px;
`;

export const Card = styled.div`
  ${block}
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eff2fd;
`;

export const Circle = styled.div`
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background: #eff2fd;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;
