import { ReactNode } from 'react';
import { Box } from '@mui/material';

interface StyledIconProps {
  children: ReactNode;
}

const StyledIcon = ({ children }: StyledIconProps) => (
  <Box
    sx={{
      fontSize: '16px',
      color: 'var(--muted-foreground)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
    }}
  >
    {children}
  </Box>
);

export default StyledIcon;
