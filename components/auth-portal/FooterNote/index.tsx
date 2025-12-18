import { Typography } from '@mui/material';

const AuthFooterNote = () => {
  return (
    <Typography variant='body2' className='auth-footer-note'>
      By continuing you agree to our <a href='#'>Terms</a> and{' '}
      <a href='#'>Privacy policy</a>.
    </Typography>
  );
};

export default AuthFooterNote;
