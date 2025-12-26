'use client';

import { usePathname } from 'next/navigation';
import CustomDrawer from './components/Drawer';
import { shouldShowSidebar } from '@/config/site.config';

const Sidebar = () => {
  const pathname = usePathname();

  if (!shouldShowSidebar(pathname)) return null;

  return <CustomDrawer />;
};

export default Sidebar;
