import { NavTab, TopNav } from '@/styles/page.styles';

const TabNavigation = () => {
  return (
    <TopNav>
      <NavTab active data-media-type='banani-button'>
        About
      </NavTab>
      <NavTab data-media-type='banani-button'>Skills</NavTab>
      <NavTab data-media-type='banani-button'>Projects</NavTab>
      <NavTab data-media-type='banani-button'>Contact</NavTab>
    </TopNav>
  );
};

export default TabNavigation;
