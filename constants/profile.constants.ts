import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

export interface ContactItem {
  id?: string;
  icon: React.ComponentType;
  text: string;
  link?: string;
  type: 'location' | 'email' | 'github' | 'linkedin' | 'phone' | 'website';
}

export const CONTACT_ITEMS: ContactItem[] = [
  {
    id: 'location',
    icon: PlaceIcon,
    text: 'Metro Manila, PH',
    type: 'location',
  },
  {
    id: 'email',
    icon: MailIcon,
    text: 'devfiljumar@gmail.com',
    link: 'mailto:devfiljumar@gmail.com',
    type: 'email',
  },
  {
    id: 'linkedin',
    icon: LinkedInIcon,
    text: 'linkedin.com/in/filjumar',
    link: 'https://linkedin.com/in/filjumar',
    type: 'linkedin',
  },
  {
    id: 'github',
    icon: GitHubIcon,
    text: 'github.com/azumawanaka',
    link: 'https://github.com/azumawanaka',
    type: 'github',
  },
  {
    id: 'phone',
    icon: PhoneIcon,
    text: '+63 999 459 7038',
    link: 'tel:+639994597038',
    type: 'phone',
  },
];
