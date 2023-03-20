import styled from 'styled-components';

import { ReactComponent as Mail } from '../../assets/mail.svg';
import { PurpleButton } from '../../common/buttons';
import { Column, Input, InputContainer, Wrapper } from '../../common/containers';
import { H3, SubTitle, Tag } from '../../common/titles';

const Card = styled.div`
  width: 555px;
  height: 300px;
  padding: 30px 63px 42px;
  display: flex;
  flex-direction: column;
  border: 1px solid #eff2fd;
  border-radius: 0 0 6px 6px;
`;

export const Content = () => {
  return (
    <Wrapper>
      <Card>
        <H3 m='0 0 12px'>Free 30-day Pro Trial</H3>
        <SubTitle m='0 0 20px'>Would you like to access multiple bundles, detailed analytics, .csv download, and many more features? Try Pro for free!</SubTitle>
        <Column m='0 auto'>
          <InputContainer m='0 0 8px'>
            <Input placeholder='Your e-mail' />
            <Mail />
          </InputContainer>
          <Tag align='center' m='0 0 25px'>
            We'll send you all info related to your free trial via e-mail
          </Tag>
          <PurpleButton h='40px'>Subscribe for free trial</PurpleButton>
        </Column>
      </Card>
    </Wrapper>
  );
};
