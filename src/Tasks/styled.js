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
  border-bottom: 1px solid #eee;
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
  color: white;
  padding: 0;
  transition: 0.3s;
  cursor: pointer;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: hsl(120, 100%, 25%);

      $:hover {
        background-color: hsl(120, 100%, 35%);
      }
      $:active {
        background-color: hsl(120, 100%, 45%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: hsl(0, 100%, 40%);

      $:hover {
        background-color: hsl(0, 86%, 60%);
      }
      $:active {
        background-color: hsl(1, 100%, 50%);
      }
    `}
`;
