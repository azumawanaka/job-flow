'use client';

import {
  ChapterContent,
  SkillItem,
  SkillsGrid,
  TextBlock,
} from '@/styles/page.styles';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HeaderTitle from '../shared/HeaderTitle';
import { CoreSkills } from '@/constants/skills.constants';
import { Box, Typography } from '@mui/material';
import { CONTENTS } from '@/constants/content.constants';

const AboutMe = () => {
  const { paragraphs } = CONTENTS.about || {};

  return (
    <ChapterContent>
      <HeaderTitle title='Who I Am' page='01' />

      <TextBlock>
        {paragraphs.map((paragraph, index) => (
          <Typography key={index} mb={2}>
            {paragraph}
          </Typography>
        ))}
      </TextBlock>

      <SkillsGrid>
        {CoreSkills.map((skill, index) => (
          <SkillItem key={index}>
            <Box className='check-icon'>
              <CheckCircleIcon />
            </Box>
            {skill.label}
          </SkillItem>
        ))}
      </SkillsGrid>
    </ChapterContent>
  );
};

export default AboutMe;
