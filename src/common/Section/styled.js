import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin: 10px 0;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.color.silver};
  background-color: ${({ theme }) => theme.color.white};
`;

export const SectionHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  border-bottom: 2px solid ${({ theme }) => theme.color.gallery};
  padding: 20px;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0px;
  font-weight: 700;
  font-size: 20px;
`;
