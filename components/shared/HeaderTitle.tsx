import { SectionTitle } from '@/styles/page.styles';

const HeaderTitle = ({ title, page }: { title: string; page: string }) => {
  return (
    <SectionTitle>
      <span style={{ color: 'var(--primary)' }}>{page}.</span> {title}
    </SectionTitle>
  );
};

export default HeaderTitle;
