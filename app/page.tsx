'use client';

import { useState } from 'react';

import { Box, Container, Tab, Tabs } from '@mui/material';
import Grid from '@mui/material/Grid';

import { AuthShell, Item } from './auth-portal';
import {
  AuthHeader,
  AuthHighLights,
  AuthMetrics,
  AuthHeroText,
  AuthFooterNote,
} from '@/components/auth-portal';
import LoginCard from '@/components/auth-portal/LoginCard';
import SignupCard from '@/components/auth-portal/SignupCard';

export default function AuthPortal() {
  const [authTabValue, setAuthTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setAuthTabValue(newValue);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        p: 2,
      }}
    >
      <Container maxWidth='md' disableGutters>
        <AuthShell>
          <Grid container spacing={2} className='auth-shell-grid'>
            <Grid item xs={12} md={6} lg={6}>
              <Item>
                <AuthHeader />
                <AuthHeroText />
                <AuthHighLights />
                <AuthMetrics />
                <AuthFooterNote />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Item>
                <Tabs
                  value={authTabValue}
                  onChange={handleChange}
                  className='auth-tabs'
                >
                  <Tab label='Log in' />
                  <Tab label='Sign up' />
                </Tabs>

                {authTabValue === 0 && <LoginCard />}
                {authTabValue === 1 && <SignupCard />}
              </Item>
            </Grid>
          </Grid>
        </AuthShell>
      </Container>
    </Box>
  );
}
