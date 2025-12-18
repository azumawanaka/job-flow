import React, { useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  TextField,
} from '@mui/material';
import AuthNote from '../AuthNote';

const options = [
  {
    label: 'Product Manager in Berlin, remote friendly',
    value: 'pm-berlin-remote',
  },
  {
    label: 'Software Engineer in San Francisco, onsite',
    value: 'se-sf-onsite',
  },
  { label: 'Data Scientist in New York, hybrid', value: 'ds-ny-hybrid' },
  {
    label: 'UX Designer in London, remote friendly',
    value: 'ux-london-remote',
  },
  {
    label: 'Marketing Specialist in Toronto, onsite',
    value: 'ms-toronto-onsite',
  },
];

const SignupForm = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (
    _event: React.SyntheticEvent,
    value: { label: string; value: string } | null
  ) => {
    setSelectedValue(value ? value.value : '');
  };

  const selectedOption =
    options.find((option) => option.value === selectedValue) || null;
  return (
    <Box className='auth-form' mt={2}>
      <FormControl variant='standard' fullWidth>
        <label htmlFor='fname-input'>Fullname</label>
        <Input id='fname-input' placeholder='Juan de la Cruz' />
      </FormControl>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl variant='standard' fullWidth>
            <label htmlFor='email-input'>Email</label>
            <Input
              id='email-input'
              placeholder='juandelacruz@example.com'
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant='standard' fullWidth>
            <label htmlFor='password-input'>
              Password
              <span>+8 characters</span>
            </label>
            <Input
              type='password'
              id='password-input'
              placeholder='*******'
              fullWidth
            />
          </FormControl>
        </Grid>
      </Grid>

      <FormControl variant='standard' fullWidth>
        <Autocomplete
          id='job-search-focus-autocomplete'
          options={options}
          getOptionLabel={(option) => option.label}
          value={selectedOption}
          onChange={handleChange}
          isOptionEqualToValue={(option, value) =>
            option.value === value?.value
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant='standard'
              label='Job search focus'
              placeholder='e.g. Product Manager in Berlin, remote friendly'
            />
          )}
        />
      </FormControl>

      <FormGroup className='auth-checkbox-label'>
        <FormControlLabel
          control={<Checkbox defaultChecked={true} />}
          label='Send me occasional tips on JobFlow and job searching updates.'
        />
      </FormGroup>
      <Button variant='contained' fullWidth className='auth-submit-button'>
        Sign up to JobFlow
      </Button>

      <AuthNote
        note='Already have an account?'
        link='#'
        linkLabel='Log in here'
      />
    </Box>
  );
};

export default SignupForm;
