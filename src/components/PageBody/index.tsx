import { Container, InputArea } from "./styles";

export function PageBody() {
  return (
    <>
      <Container>
        <p className="input-id">Informe a sua altura</p>
          <input type="number" />
          <p className="cm-after-input">cm</p>
        <p className="input-id">Informe o seu peso</p>
          <input type="number" />
          <p className="kg-after-input">kg</p>
      </Container>
    </>
  );
}
