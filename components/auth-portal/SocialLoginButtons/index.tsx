import { Facebook, Google } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

const LoginCard = () => {
  return (
    <>
      <Box
        mt={3}
        display='flex'
        flexDirection='column'
        gap={1}
        className='auth-social-buttons'
      >
        <Button variant='outlined' startIcon={<Google />}>
          Continue with Google
        </Button>
        <Button variant='outlined' startIcon={<Facebook />}>
          Continue with Facebook
        </Button>
      </Box>

      <Typography variant='body2' mt={3}>
        or use your email
      </Typography>
    </>
  );
};

export default LoginCard;
