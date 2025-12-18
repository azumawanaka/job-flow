import { Typography } from '@mui/material';
import { ReactNode } from 'react';

const AuthCardHeader = (props: { title?: string; subtitle?: ReactNode }) => {
  const { title, subtitle } = props || {};

  return (
    <>
      <Typography variant='h6' className='auth-form-title'>
        {title || 'Welcome back, Fil'}
      </Typography>

      <Typography variant='body2' className='auth-form-subtitle'>
        {subtitle || (
          <>
            Log in to continue as <strong>Filjumar Jumamoy</strong> or switch
            account below.
          </>
        )}
      </Typography>
    </>
  );
};

export default AuthCardHeader;
