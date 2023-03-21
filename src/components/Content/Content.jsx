import { useState } from 'react';
import styled from 'styled-components';

import { Form } from '../Form/Form';

import { SuccessMessage } from '../SuccessMessage/SuccessMessage';

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  top: 177px;
  transform: translateX(-50%);
  border: 1px solid #eff2fd;
  border-radius: 6px;
  z-index: 1;
  background: #ffffff;
  width: 555px;
  height: 520px;
`;

export const Content = () => {
  const [success, setSuccess] = useState(false);

  const toggleSuccess = () => setSuccess((prev) => !prev);

  return <CardContent>{success ? <SuccessMessage {...{ onBack: toggleSuccess }} /> : <Form {...{ setSuccess }} />}</CardContent>;
};
