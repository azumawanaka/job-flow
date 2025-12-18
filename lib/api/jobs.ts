import { transformGitHubJob } from '../utils/apiTransformers';
import { githubJobsClient } from './client';

export const fetchJobs = async (params = {}) => {
  try {
    const response = await githubJobsClient.get('/positions.json', { params });
    return response.data.map(transformGitHubJob);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};

export const fetchJobDetails = async (id: string) => {
  try {
    const response = await githubJobsClient.get(`/positions/${id}.json`);
    return transformGitHubJob(response.data);
  } catch (error) {
    console.error('Error fetching job details:', error);
    return null;
  }
};
