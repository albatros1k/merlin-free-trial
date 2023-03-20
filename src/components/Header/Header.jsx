import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import topPreview from '../../assets/top-preview.png';
import { ReactComponent as ExternalLink } from '../../assets/external-link.svg';
import { HeaderStyled, Row } from '../../common/containers';
import { Button } from '../../common/buttons';

const Logo = styled.img`
  width: 140px;
  height: 36px;
`;

const Preview = styled.img`
  position: absolute;
  width: 525px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Card = styled.div`
  width: 555px;
  height: 230px;
  position: absolute;
  background: #fcfcff;
  bottom: 0;
  border-radius: 6px 6px 0 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <Row>
        <Logo src={logo} />
        <Button p='0 16px'>
          <Row align='center'>
            Open Merlin App
            <ExternalLink />
          </Row>
        </Button>
      </Row>
      <Card>
        <Preview src={topPreview} />
      </Card>
    </HeaderStyled>
  );
};
