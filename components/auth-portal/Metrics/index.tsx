import { Card, CardContent, Grid, Typography } from '@mui/material';
import { AuthMetricStyles } from './style';

const AuthMetrics = () => {
  return (
    <AuthMetricStyles container spacing={2}>
      <Grid item xs={12} sm={6} lg={6} sx={{ height: '100%' }}>
        <Card>
          <CardContent>
            <Typography gutterBottom className='auth-metric-label'>
              Active pipeline
            </Typography>
            <Typography
              variant='h5'
              component='div'
              className='auth-metric-value'
            >
              18 roles
            </Typography>
            <Typography variant='body2' className='auth-metric-label'>
              Synced from boards & alerts
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} lg={6} sx={{ height: '100%' }}>
        <Card>
          <CardContent>
            <Typography gutterBottom className='auth-metric-label'>
              Avg. match score (offers)
            </Typography>
            <Typography
              variant='h5'
              component='div'
              className='auth-metric-value'
            >
              89%
            </Typography>
            <Typography variant='body2' className='auth-metric-label'>
              With tailored resume variants
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </AuthMetricStyles>
  );
};

export default AuthMetrics;
