'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '@/redux/slices/jobSlice';
import JobList from '@/components/dashboard/JobList';
import { Button, TextField, Grid } from '@mui/material';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs({ description: 'react' }));
  }, [dispatch]);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Job Dashboard</h1>
        </Grid>
        <Grid item xs={12} md={8}>
          <JobList jobs={jobs} loading={loading} />
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ padding: '20px', background: '#f5f5f5' }}>
            <h3>Filters</h3>
            <TextField label='Search Jobs' fullWidth />
            <Button variant='contained' sx={{ mt: 2 }}>
              Search GitHub Jobs
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
