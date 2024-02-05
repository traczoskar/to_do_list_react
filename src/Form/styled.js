import styled from "styled-components";

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.maxMobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const InputWindow = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  width: 100%;

  &:active {
    border: 1px solid black;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: 400;
  transition: 0.3s;
  background-color: hsl(180, 100%, 25%);
  color: #ffff;
  width: 100%;

  &:hover {
    background-color: hsla(180, 100%, 30%);
    transform: scale(1.05);
  }
  &:active {
    background-color: hsla(180, 100%, 35%);
  }
`;
