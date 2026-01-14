import ScienceIcon from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';
import LayersIcon from '@mui/icons-material/Layers';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const SkillsData = [
  {
    category: 'Frontend Ecosystem',
    skills: [
      {
        icon: <ScienceIcon sx={{ fontSize: 16 }} />,
        name: 'React.js / Next.js',
      },
      { icon: <CodeIcon sx={{ fontSize: 16 }} />, name: 'TypeScript' },
      { icon: <PaletteIcon sx={{ fontSize: 16 }} />, name: 'Tailwind CSS' },
      { icon: <DashboardIcon sx={{ fontSize: 16 }} />, name: 'HTML5 / SCSS' },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      {
        icon: <StorageIcon sx={{ fontSize: 16 }} />,
        name: 'Node.js / Express',
      },
      { icon: <DataObjectIcon sx={{ fontSize: 16 }} />, name: 'PostgreSQL' },
      { icon: <TerminalIcon sx={{ fontSize: 16 }} />, name: 'PHP / Laravel' },
      { icon: <LayersIcon sx={{ fontSize: 16 }} />, name: 'Redis' },
    ],
  },
  {
    category: 'Tools & Deployment',
    skills: [
      { icon: <GitHubIcon sx={{ fontSize: 16 }} />, name: 'Git / GitHub' },
      { icon: <DesktopWindowsIcon sx={{ fontSize: 16 }} />, name: 'Docker' },
    ],
  },
];

export const SkillsCategories = [
  'Frontend Ecosystem',
  'Backend & Database',
  'Tools & Deployment',
];

export const AllSkills = [
  { icon: <ScienceIcon sx={{ fontSize: 16 }} />, name: 'React.js / Next.js' },
  { icon: <CodeIcon sx={{ fontSize: 16 }} />, name: 'TypeScript' },
  { icon: <PaletteIcon sx={{ fontSize: 16 }} />, name: 'Tailwind CSS' },
  { icon: <DashboardIcon sx={{ fontSize: 16 }} />, name: 'HTML5 / SCSS' },
  { icon: <StorageIcon sx={{ fontSize: 16 }} />, name: 'Node.js / Express' },
  { icon: <DataObjectIcon sx={{ fontSize: 16 }} />, name: 'PostgreSQL' },
  { icon: <TerminalIcon sx={{ fontSize: 16 }} />, name: 'PHP / Laravel' },
  { icon: <LayersIcon sx={{ fontSize: 16 }} />, name: 'Redis' },
  { icon: <GitHubIcon sx={{ fontSize: 16 }} />, name: 'Git / GitHub' },
  { icon: <DesktopWindowsIcon sx={{ fontSize: 16 }} />, name: 'Docker' },
];

export const CoreSkills = [
  {
    label: 'PHP/Laravel/CodeIgniter',
  },
  {
    label: 'JS/JQuery/React/Next/TS',
  },
  {
    label: 'WordPress/Strapi',
  },
  {
    label: 'HTML5/CSS3/SCSS',
  },
  {
    label: 'Version-Control/Git',
  },
  {
    label: 'Mobile Responsive',
  },
];
