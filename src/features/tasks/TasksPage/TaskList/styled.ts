import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  margin: 0px;
  padding: 20px;
  list-style-type: none;
`;

export const Task = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gallery};
  padding: 10px;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    0% {
      transform: translateY(20%);
      opacity: 0;
    }
    50% {
      transform: translateY(0);
      transform: scale(1);
    }
    75% {
      transform: scale(1.02);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span<{ done?: boolean }>`
  ${({ done }) =>
    done &&
    css`
      text-decoration-line: line-through;
    `}
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.color.silver};
    cursor: pointer;
  }
`;

export const Button = styled.button<{ toggleDone?: boolean; remove?: boolean }>`
  border: none;
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.color.white};
  padding: 0;
  transition: 0.3s;
  cursor: pointer;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.bilbao};

      &:hover {
        filter: brightness(130%);
      }
      &:active {
        filter: brightness(160%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.milanored};

      &:hover {
        filter: brightness(120%);
      }
      &:active {
        filter: brightness(140%);
      }
    `}
`;
