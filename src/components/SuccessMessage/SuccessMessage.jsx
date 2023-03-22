import { BackButton } from '../../common/buttons';
import { Circle, Column } from '../../common/containers';
import { H3, SubTitle } from '../../common/titles';
import { ReactComponent as Star } from '../../assets/start.svg';
import { useMobile } from '../../hooks';

export const SuccessMessage = ({ onBack, email }) => {
  const isMobile = useMobile();
  return (
    <Column w='100%' h='100%' align='center' p={isMobile ? '60px 20px 30px' : '100px 0 40px'}>
      <Circle>
        <Star />
      </Circle>
      <H3 m='0 0 12px'>Free Trial Request Submitted</H3>
      <SubTitle p={isMobile ? '0' : '0 61px'} m='0 0 100px'>
        Thank you. You will receive an email with the details to access your free trial subscriptions within the next 10 days.
      </SubTitle>
      <BackButton onClick={onBack}>Back to Form</BackButton>
    </Column>
  );
};
