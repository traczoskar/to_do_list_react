import { ContainerHeader } from "./styled";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <header>
    <ContainerHeader>{title}</ContainerHeader>
  </header>
)

export default Header;