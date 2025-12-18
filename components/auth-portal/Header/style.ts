import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const AuthHeaderStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& .auth-beta-pill': {
    padding: '4px 10px',
    fontSize: 11,
    fontWeight: 500,
  },
}));
