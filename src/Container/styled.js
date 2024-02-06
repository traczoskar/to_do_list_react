import styled from "styled-components";

export const Container = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;
