import { Box } from '@mui/material';

interface AuthNoteProps {
  note?: string;
  link?: string;
  linkLabel?: string;
}

const AuthNote = (props: AuthNoteProps) => {
  const { note, link, linkLabel } = props || {};

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      mt={2}
      className='auth-sign-up-note'
    >
      {note || "Don't have an account yet?"}
      <a href={link || '#'}>{linkLabel || 'Sign up here'}</a>
    </Box>
  );
};

export default AuthNote;
