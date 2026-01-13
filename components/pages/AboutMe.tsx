'use client';

import {
  ChapterContent,
  SectionTitle,
  SkillItem,
  SkillsGrid,
  TextBlock,
} from '@/styles/page.styles';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AboutMe = () => {
  return (
    <ChapterContent>
      <SectionTitle>
        <span style={{ color: 'var(--primary)' }}>01.</span> Who I Am
      </SectionTitle>

      <TextBlock>
        <p style={{ marginBottom: '16px' }}>
          I am a results-oriented Fullstack Web Developer with a passion for
          creating seamless digital experiences. Specializing in the PHP
          ecosystem (Laravel, CodeIgniter) and modern JavaScript frameworks
          (React, Next.js), I bridge the gap between complex backend logic and
          intuitive frontend design.
        </p>
        <p>
          With a keen eye for detail and a commitment to clean code, I build
          scalable applications that solve real-world problems. Whether it's a
          custom WordPress theme or a full-scale SaaS platform, I bring
          technical expertise and creative problem-solving to every project.
        </p>
      </TextBlock>

      <SkillsGrid>
        <SkillItem>
          <div
            style={{
              width: '14px',
              height: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircleIcon
              sx={{ fontSize: '14px', color: 'var(--primary)' }}
            />
          </div>
          PHP / Laravel
        </SkillItem>
        <SkillItem>
          <div
            style={{
              width: '14px',
              height: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircleIcon
              sx={{ fontSize: '14px', color: 'var(--primary)' }}
            />
          </div>
          React / Next.js
        </SkillItem>
        <SkillItem>
          <div
            style={{
              width: '14px',
              height: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircleIcon
              sx={{ fontSize: '14px', color: 'var(--primary)' }}
            />
          </div>
          WordPress
        </SkillItem>
        <SkillItem>
          <div
            style={{
              width: '14px',
              height: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircleIcon
              sx={{ fontSize: '14px', color: 'var(--primary)' }}
            />
          </div>
          HTML5 / SCSS
        </SkillItem>
        <SkillItem>
          <div
            style={{
              width: '14px',
              height: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircleIcon
              sx={{ fontSize: '14px', color: 'var(--primary)' }}
            />
          </div>
          CodeIgniter
        </SkillItem>
        <SkillItem>
          <div
            style={{
              width: '14px',
              height: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircleIcon
              sx={{ fontSize: '14px', color: 'var(--primary)' }}
            />
          </div>
          Git / Version Control
        </SkillItem>
      </SkillsGrid>
    </ChapterContent>
  );
};

export default AboutMe;
