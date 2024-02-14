import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: inherit;
  color: inherit;
  padding: 20px;
  &.active {
    font-weight: 700;
    transform: scale(1.05);
  }
`;

export const NavBar = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  list-style: none;
  padding: 20px;
`;
