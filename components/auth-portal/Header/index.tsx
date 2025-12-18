import { Chip, Stack } from '@mui/material';
import { AuthHeaderStyle } from './style';

const AuthHeader = () => {
  return (
    <AuthHeaderStyle>
      <Stack direction='row' spacing={1} alignItems='center'>
        <Chip label='J' color='primary' />
        <strong>JobFlow</strong>
      </Stack>
      <Chip
        label='Actively searching'
        size='small'
        className='auth-beta-pill'
      />
    </AuthHeaderStyle>
  );
};

export default AuthHeader;
