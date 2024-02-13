import { hover } from "@testing-library/user-event/dist/hover";
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

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration-line: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.color.white};
  padding: 0;
  transition: 0.3s;
  cursor: pointer;

  ${({ toggledone }) =>
    toggledone &&
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
