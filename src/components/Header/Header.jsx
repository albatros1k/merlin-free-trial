import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import { ReactComponent as ExternalLink } from '../../assets/external-link.svg';
import { HeaderStyled, Row } from '../../common/containers';
import { Button } from '../../common/buttons';
import { useMobile } from '../../hooks';

const Logo = styled.img`
  width: 140px;
  height: 36px;
  @media only screen and (max-width: 768px) {
    width: 124px;
    height: 32px;
  }
`;

const link = 'https://mymerlin.io';

export const Header = () => {
  const isMobile = useMobile();

  const explore = () => window.open(link, '_blank');

  return (
    <HeaderStyled>
      <Row h='fit-content' align='center'>
        <Logo src={logo} />
        <Button p={isMobile ? '0 10px' : '0 16px'} onClick={explore}>
          <Row align='center'>
            Open Merlin App
            <ExternalLink />
          </Row>
        </Button>
      </Row>
    </HeaderStyled>
  );
};
