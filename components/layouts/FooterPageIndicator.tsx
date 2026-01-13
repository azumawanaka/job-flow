import {
  ArrowButton,
  NavArrows,
  PageIndicator,
  PageNum,
} from '@/styles/page.styles';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FooterPageIndicator = () => {
  return (
    <PageIndicator>
      <PageNum>Page 1 of 4</PageNum>
      <NavArrows>
        <ArrowButton
          disabled
          data-media-type='banani-button'
          sx={{ width: '40px', height: '40px' }}
        >
          <ArrowBackIcon sx={{ fontSize: '20px' }} />
        </ArrowButton>
        <ArrowButton
          active={true}
          data-media-type='banani-button'
          sx={{ width: '40px', height: '40px' }}
        >
          <ArrowForwardIcon sx={{ fontSize: '20px' }} />
        </ArrowButton>
      </NavArrows>
    </PageIndicator>
  );
};

export default FooterPageIndicator;
