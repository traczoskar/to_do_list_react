import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonSpecial = styled.button`
  border: none;
  background-color: transparent;
  padding: 10px;
  color: teal;
  margin: 0 0 0 20px;
  transition: 0.3s;

  &:hover {
    color: hsl(180, 100%, 35%);
  }
  &:disabled {
    color: #bbb;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;
