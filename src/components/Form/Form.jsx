import { Fragment, useDeferredValue, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Mail } from '../../assets/mail.svg';
import { PurpleButton } from '../../common/buttons';
import { Card, Column, Input, InputContainer } from '../../common/containers';
import { H3, SubTitle, Tag } from '../../common/titles';
import topPreview from '../../assets/top-preview.png';
import { useMobile } from '../../hooks';

const Preview = styled.img`
  width: 100%;
  height: 229px;
  @media only screen and (max-width: 768px) {
    height: 169px;
    width: 100%;
  }
`;

export const Form = ({ setSuccess, email, setEmail }) => {
  const [isValid, setIsValid] = useState(false);

  const isMobile = useMobile();

  const deferredEmail = useDeferredValue(email);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setIsValid(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(e.target.value));
  };

  const onSubscribe = async () => {
    try {
      setSuccess(true);
    } catch (error) {}
  };

  return (
    <Fragment>
      <Preview src={topPreview} />
      <Card w='100%' p={isMobile ? '20px 23px 40px' : '23px 63px 42px'}>
        <H3 m={isMobile ? '0 0 10px' : '0 0 12px'}>Free 30-day Pro Trial</H3>
        <SubTitle m='0 0 20px'>Would you like to access multiple bundles, detailed analytics, .csv download, and many more features? Try Pro for free!</SubTitle>
        <Column m={isMobile ? '0' : '0 auto'}>
          <InputContainer m='0 0 8px' w='100%'>
            <Input placeholder='Your e-mail' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required={true} value={deferredEmail} onChange={onChangeEmail} />
            <Mail />
          </InputContainer>
          <Tag align='center' m='0 0 25px'>
            We'll send you all info related to your free trial via e-mail
          </Tag>
          <PurpleButton w='100%' h='40px' onClick={onSubscribe} disabled={!isValid}>
            Subscribe for free trial
          </PurpleButton>
        </Column>
      </Card>
    </Fragment>
  );
};
