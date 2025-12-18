import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const AuthMetricStyles = styled(Grid)(({ theme }) => ({
  textAlign: 'left',
  marginTop: theme.spacing(1),
  padding: 0,
  '& .MuiPaper-root': {
    boxShadow: 'none',
    borderRadius: Number(theme.shape.borderRadius) * 2,
  },
  '& .MuiCardContent-root': {
    padding: '8px 10px',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    backgroundColor: theme.custom.color.secondary,
    '&:last-child': {
      paddingBottom: 8,
    },
  },
  '& .auth-metric-label': {
    color: theme.custom.color.mutedForeground,
    fontSize: 11,
  },
  '& .auth-metric-value': {
    fontSize: 14,
    fontWeight: 500,
  },
}));
