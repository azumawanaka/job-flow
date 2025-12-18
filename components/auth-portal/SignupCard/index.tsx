import SocialLoginButtons from '../SocialLoginButtons';
import AuthCardHeader from '../AuthCardHeader';
import SignupForm from '../SignupForm';

const SignupCard = () => {
  return (
    <>
      <AuthCardHeader
        title='Sign up to JobFlow'
        subtitle='Create an account in seconds. No credit card required.'
      />
      <SocialLoginButtons />
      <SignupForm />
    </>
  );
};

export default SignupCard;
