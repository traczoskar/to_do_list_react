import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { AboutMe } from "./AboutMe";

export default () => {
  return (
    <Container>
      <Header title="O autorze" />
      <Section title="Oskar Tracz" body={<AboutMe />} />
    </Container>
  );
};
