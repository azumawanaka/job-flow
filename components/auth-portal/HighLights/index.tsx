import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { AuthHighLightsStyle } from './style';

const AuthHighLights = () => {
  return (
    <AuthHighLightsStyle>
      <ListItem>
        <ListItemIcon>
          <CheckCircle />
        </ListItemIcon>
        <ListItemText
          primary='Unified job search workspace'
          secondary='Search, track, and analyze your pipeline in one place with smart matching and kanban boards.'
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckCircle />
        </ListItemIcon>
        <ListItemText
          primary='Resume variants that adapt'
          secondary='Quickly compare any resume to a target role and apply AI-powered improvements in a click.'
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckCircle />
        </ListItemIcon>
        <ListItemText
          primary='Company & salary insights'
          secondary='Get benchmarks by company, role, and location so you know when an offer is competitive.'
        />
      </ListItem>
    </AuthHighLightsStyle>
  );
};

export default AuthHighLights;
