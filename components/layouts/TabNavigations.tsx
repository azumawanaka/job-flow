import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { NavTab, TopNav } from '@/styles/page.styles';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import { NavigationTabs } from '@/constants/navigation-tabs.constants';

interface TabNavigationsProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const TabNavigations = (props: TabNavigationsProps) => {
  const { value, handleChange } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TopNav>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='basic tabs'
        variant={'standard'}
        scrollButtons={isMobile ? 'auto' : false}
      >
        {NavigationTabs.map((tab, index) => (
          <NavTab
            key={index}
            label={tab.label}
            aria-controls={`tabpanel-${index}`}
          />
        ))}
      </Tabs>
    </TopNav>
  );
};

export default TabNavigations;
