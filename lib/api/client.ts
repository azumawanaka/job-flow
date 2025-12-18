import axios from 'axios';

export const githubJobsClient = axios.create({
  baseURL: 'https://jobs.github.com',
  timeout: 10000,
});

export const reedJobsClient = axios.create({
  baseURL: 'https://www.reed.co.uk/api/1.0',
  headers: {
    Authorization: `Basic ${btoa(process.env.REED_API_KEY + ':')}`,
  },
});
