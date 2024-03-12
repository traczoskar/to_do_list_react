import styled from "styled-components";

export default styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.alto};
  width: 100%;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.darksilver};
    filter: drop-shadow(1px 2px 10px rgba(0, 0, 0, 0.015));
  }
  &:active {
    border: 1px solid ${({ theme }) => theme.color.black};
  }
`;
