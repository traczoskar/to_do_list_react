import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";

export default () => {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Oskar Tracz"
        body={
          <>
            <p>
              O mnie Mam 27 lat, mieszkam w niewielkiej miejscowości graniczącej
              ze Słupskiem na Pomorzu. Ukończyłem studia na Akademii
              Dziennikarstwa i Realizacji Dźwięku w Warszawie na kierunku
              realizatora dźwięku. Na codzień prowadzę studio nagrań
              dźwiękowych, oraz firmę prosperującą w branży reklamowej i
              poligraficznej. Interesuję się również branżą e-commerce. Lubię
              wyzwania w życiu, dlatego z racji na trochę wolnego czasu
              postanowiłem spróbować swoich sił w IT. Mam nadzieję, że branża
              okaże się tak ciekawa jak zawsze o niej myślałem, bo odkąd
              pamiętam miałem w planie być programistą. Cele Drogi życiowe
              poprowadziły mnie trochę inaczej ale jak to mówią: "Nigdy nie jest
              za późno". Wierzę w to, że starczy mi wytrwałości i determinacji
              aby stać się profesjonalnym frontendowcem. Mój główny cel to
              opanować w stopniu zaawansowanym wszelkie potrzebne umiejętności i
              zagadanienia wymagane do pracy na stopniu co najmniej mid/regular
              frontend developera. I w końcu liczę na to, że uda mi się zrobić
              strony internetowe dla moich 2-óch innych działalności za co
              zabieram się już od dłuższego czasu. Nie pozostaje nic innego jak
              brać się do pracy!
            </p>
          </>
        }
      />
    </Container>
  );
};
