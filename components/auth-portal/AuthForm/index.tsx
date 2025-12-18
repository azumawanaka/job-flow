import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
} from '@mui/material';
import AuthNote from '../AuthNote';

const AuthForm = () => {
  return (
    <Box className='auth-form' mt={2}>
      <FormControl variant='standard' fullWidth>
        <label htmlFor='email-input'>
          Email
          <a href='#'>Use another account</a>
        </label>
        <Input id='email-input' placeholder='juandelacruz@example.com' />
      </FormControl>

      <FormControl variant='standard' fullWidth>
        <label htmlFor='password-input'>
          Password
          <a href='#'>Forgot password?</a>
        </label>
        <Input id='password-input' placeholder='*******' />
      </FormControl>

      <FormGroup className='auth-checkbox-label'>
        <FormControlLabel
          control={<Checkbox defaultChecked={false} />}
          label='Keep me signed in on this device.'
        />
      </FormGroup>
      <Button variant='contained' fullWidth className='auth-submit-button'>
        Log in to JobFlow
      </Button>

      <AuthNote />
    </Box>
  );
};

export default AuthForm;
