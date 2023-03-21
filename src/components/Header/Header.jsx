import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import { ReactComponent as ExternalLink } from '../../assets/external-link.svg';
import { HeaderStyled, Row } from '../../common/containers';
import { Button } from '../../common/buttons';

const Logo = styled.img`
  width: 140px;
  height: 36px;
`;

const link = 'https://mymerlin.io';

export const Header = () => {
  const explore = () => window.open(link, '_blank');

  return (
    <HeaderStyled>
      <Row>
        <Logo src={logo} />
        <Button p='0 16px' onClick={explore}>
          <Row align='center'>
            Open Merlin App
            <ExternalLink />
          </Row>
        </Button>
      </Row>
    </HeaderStyled>
  );
};
