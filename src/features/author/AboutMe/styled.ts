import styled from "styled-components";

export const Article = styled.p`
  padding: 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.mineshaft};
  line-height: 28px;
  text-align: justify;
  animation: slideUp 1s ease-in-out;

  @keyframes slideUp {
    0% {
      transform: translateY(10%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
