'use client';

import { Box } from '@mui/material';
import {
  CategoryTitle,
  SkillsList,
  SkillCard,
  ChapterContent,
} from '@/styles/page.styles';
import HeaderTitle from '../shared/HeaderTitle';
import { SkillsData } from '@/constants/skills.constants';
import StyledIcon from '../shared/StyledIcon';

const TechnicalProficiency = () => {
  return (
    <ChapterContent>
      <HeaderTitle title='Technical Proficiency' page='02' />

      {SkillsData.map((category, categoryIndex) => (
        <Box key={categoryIndex} mb={{ xs: 2, sm: 3 }}>
          <CategoryTitle>{category.category}</CategoryTitle>
          <SkillsList>
            {category.skills.map((skill, skillIndex) => (
              <SkillCard key={skillIndex}>
                <StyledIcon>{skill.icon}</StyledIcon>
                {skill.name}
              </SkillCard>
            ))}
          </SkillsList>
        </Box>
      ))}
    </ChapterContent>
  );
};

export default TechnicalProficiency;
