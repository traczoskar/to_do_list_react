import styled from "styled-components";
import { css } from "styled-components";

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
  ${({ loading }) =>
    loading &&
    css`
      color: ${({ theme }) => theme.color.darksilver};
      animation: pulseBlink 1.5s infinite;
      @keyframes pulseBlink {
        0% {
          opacity: 0.5;
          transform: scale(1);
        }
        50% {
          opacity: 1;
          transform: scale(1.05);
        }
        100% {3
          opacity: 0.5;
          transform: scale(1);
        }
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;
