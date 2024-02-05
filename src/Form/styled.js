import styled from "styled-components";

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const InputWindow = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.alto};
  width: 100%;

  &:active {
    border: 1px solid ${({ theme }) => theme.color.black};
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: 400;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  width: 100%;

  &:hover {
    filter: brightness(115%);
    transform: scale(1.05);
  }
  &:active {
    filter: brightness(130%);
  }
`;
