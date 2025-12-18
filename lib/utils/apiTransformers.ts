export const transformGitHubJob = (apiJob: any) => ({
  id: apiJob.id,
  title: apiJob.title,
  company: apiJob.company,
  location: apiJob.location,
  type: apiJob.type || 'Full-time',
  description: apiJob.description,
  how_to_apply: apiJob.how_to_apply,
  created_at: new Date(apiJob.created_at),
  source: 'github',
  url: apiJob.url,
});
