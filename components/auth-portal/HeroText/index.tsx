import { Typography } from '@mui/material';

const AuthHeroText = () => {
  return (
    <>
      <Typography variant='h5' textAlign='left'>
        Stay on top of every application, from search to offer.
      </Typography>
      <Typography variant='body1' textAlign='left' className='auth-subtitle'>
        Create an account or sign in to sync your job search dashboard, resume
        variants, and application board across devices.
      </Typography>
    </>
  );
};

export default AuthHeroText;
