import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateJobDescription = async (
  jobTitle: string,
  company: string
) => {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful HR assistant that writes compelling job descriptions.',
      },
      {
        role: 'user',
        content: `Write a job description for ${jobTitle} at ${company}`,
      },
    ],
  });

  return completion.choices[0].message.content;
};
