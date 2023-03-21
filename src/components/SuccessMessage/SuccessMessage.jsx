import { BackButton } from '../../common/buttons';
import { Circle, Column } from '../../common/containers';
import { H3, SubTitle } from '../../common/titles';
import { ReactComponent as Star } from '../../assets/start.svg';

export const SuccessMessage = ({ onBack }) => {
  return (
    <Column w='100%' h='100%' align='center' p='100px 0 40px'>
      <Circle>
        <Star />
      </Circle>
      <H3 m='0 0 12px'>We've sent you details!</H3>
      <SubTitle p='0 61px'>Thank you. We have just sent you all the details related to your free pro subscription. Please check your email at {`USER_EMAIL`}.</SubTitle>
      <BackButton onClick={onBack}>Back to Form</BackButton>
    </Column>
  );
};
