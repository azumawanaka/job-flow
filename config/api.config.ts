export const API_CONFIG = {
  GITHUB_JOBS: {
    BASE_URL: 'https://jobs.github.com/positions.json',
  },
  REED_JOBS: {
    BASE_URL: 'https://www.reed.co.uk/api/1.0',
    API_KEY: process.env.REED_API_KEY,
  },
  OPENAI: {
    API_KEY: process.env.OPENAI_API_KEY,
  },
} as const;
