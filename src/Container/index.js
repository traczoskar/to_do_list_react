import styled from "styled-components";

const Container = ({ className, children }) => (
  <main className={className}>{children}</main>
);

export const StyledContainer = styled(Container)`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;
