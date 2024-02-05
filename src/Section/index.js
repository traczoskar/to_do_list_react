import { SectionWrapper, SectionHeader, SectionTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionWrapper>
    <SectionHeader>
      <SectionTitle>{title}</SectionTitle>
      {extraHeaderContent}
    </SectionHeader>
    {body}
  </SectionWrapper>
);

export default Section;
