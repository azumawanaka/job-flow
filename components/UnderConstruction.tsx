'use client';

import React from 'react';
import { Box, Fade } from '@mui/material';
import {
  FloatingIcon,
  GradientBackground,
  GradientText,
} from '@/styles/page.styles';

const ModernGradientConstruction: React.FC = () => {
  return (
    <Fade in timeout={1000}>
      <Box>
        <GradientBackground>
          <Box
            className='content-container'
            sx={{
              zIndex: 1,
              p: 8,
              textAlign: 'center',
            }}
          >
            <FloatingIcon />

            <GradientText variant='h2' sx={{ fontWeight: 800, mb: 3 }}>
              Under Construction
            </GradientText>
          </Box>
        </GradientBackground>
      </Box>
    </Fade>
  );
};

export default ModernGradientConstruction;
