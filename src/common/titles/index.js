import styled from 'styled-components';

export const Tag = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: #99a4b8;
  text-align: ${({ ta = 'center' }) => ta};
  margin: ${({ m = 0 }) => m};
`;

export const H3 = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #0e0e0e;
  text-align: ${({ ta = 'center' }) => ta};
  margin: ${({ m = 0 }) => m};
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SubTitle = styled.p`
  color: #99a4b8;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: ${({ ta = 'center' }) => ta};
  margin: ${({ m = 0 }) => m};
  padding: ${({ p = 0 }) => p};
    @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
