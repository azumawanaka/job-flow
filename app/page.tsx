'use client';

import { Container } from '@mui/material';

import {
  MainStage,
  BookSpread,
  PageLeft,
  PageRight,
  SpineCenter,
  OuterContainer,
} from '@/styles/page.styles';
import AboutMe from '@/components/pages/AboutMe';
import TabNavigation from '@/components/layouts/TabNavigations';
import FooterPageIndicator from '@/components/layouts/FooterPageIndicator';
import ProfileSideBar from '@/components/layouts/ProfileSideBar';

export default function Welcome() {
  return (
    <OuterContainer>
      <Container maxWidth='lg' disableGutters>
        <MainStage>
          <BookSpread>
            <PageLeft>
              <ProfileSideBar />
            </PageLeft>

            {/* Middle Spine */}
            <SpineCenter />

            {/* Right Page: Content */}
            <PageRight>
              <TabNavigation />
              <AboutMe />
              <FooterPageIndicator />
            </PageRight>
          </BookSpread>
        </MainStage>
      </Container>
    </OuterContainer>
  );
}
