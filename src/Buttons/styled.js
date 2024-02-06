import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 10px;
  color: ${({ theme }) => theme.color.teal};
  margin: 0 0 0 20px;
  transition: 0.3s;

  &:hover {
    filter: brightness(140%);
  }
  &:disabled {
    color: ${({ theme }) => theme.color.darksilver};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;
