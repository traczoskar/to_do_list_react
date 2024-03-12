import { ReactNode } from "react";
import { SectionWrapper, SectionHeader, SectionTitle } from "./styled";

interface SectionProps {
  title: ReactNode;
  body: ReactNode;
  extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: SectionProps) => (
  <SectionWrapper>
    <SectionHeader>
      <SectionTitle>{title}</SectionTitle>
      {extraHeaderContent}
    </SectionHeader>
    {body}
  </SectionWrapper>
)

export default Section;
