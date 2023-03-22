import { useState } from 'react';
import styled from 'styled-components';

import { Form } from '../Form/Form';

import { SuccessMessage } from '../SuccessMessage/SuccessMessage';

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 170px;
  transform: translateX(-50%);
  border: 1px solid #eff2fd;
  border-radius: 6px;
  z-index: 1;
  background: #ffffff;
  width: 755px;
  @media only screen and (max-width: 768px) {
    width: 90%;
    top: 70px;
  }
`;

export const Content = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const toggleSuccess = () => setSuccess((prev) => !prev);

  return <CardContent>{success ? <SuccessMessage {...{ onBack: toggleSuccess, email }} /> : <Form {...{ setSuccess, email, setEmail }} />}</CardContent>;
};
