import styled from "styled-components";

export const Finished = styled.div`
  padding: 20px;
  font-size: 18px;
`;

export const Done = styled.span`
  color: ${({ theme }) => theme.color.bilbao};
  font-weight: 500;
  margin-left: 5px;
`;
export const Undone = styled.span`
  color: ${({ theme }) => theme.color.milanored};
  font-weight: 500;
  margin-left: 5px;
`;
