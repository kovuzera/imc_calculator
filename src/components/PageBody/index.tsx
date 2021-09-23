import { Container, InputArea, Result } from "./styles";
import { useState } from "react";
import imcTable from "../database/imcTable.json";

export function PageBody() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  function calculateImc() {
    const calc =
      Number(weight) / ((Number(height) / 100) * (Number(height) / 100));
      return calc;
  }

  const returnRank = () => {
    if (calculateImc() <= 18.5) {
      return imcTable[0].rank;
    } else if (calculateImc() >= 18.5 && calculateImc() <= 24.9) {
      return imcTable[1].rank;
    } else if (calculateImc() >= 25 && calculateImc() <= 29.9) {
      return imcTable[2].rank;
    } else if (calculateImc() >= 30 && calculateImc() <= 39.9) {
      return imcTable[3].rank;
    } else if (calculateImc() >= 40) {
      return imcTable[4].rank;
    }
  };

  return (
    <>
      <Container>
        <p className="explanation">
          Informe a sua altura e seu peso. Para isso, utilize apenas números,
          sem vírgulas.
        </p>
        <InputArea>
          <p className="input-id">Informe a sua altura:</p>
          <input
            maxLength={3}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <p className="cm-after-input">cm</p>
          <p className="input-id">Informe o seu peso:</p>
          <input
            maxLength={3}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <p className="kg-after-input">kg</p>
        </InputArea>
        <Result>
          <p className="imc-equals">O seu IMC é de:</p>
          <span className="imc-result">{calculateImc().toFixed(2)}</span>
        </Result>
        <p>Você se encontra no quadro: {returnRank()}</p>
      </Container>
    </>
  );
}
