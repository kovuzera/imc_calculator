import { Container, ExtraContent, InputArea, Result } from "./styles";
import { useState } from "react";
import imcTable from "../database/imcTable.json";

export function PageBody() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  function calculateImc() {
    const calc =
      Number(weight) / ((Number(height) / 100) * (Number(height) / 100));
    if (isNaN(calc)) {
      return 0;
    } else {
      return calc;
    }
  }

  const returnRank = () => {
    if (calculateImc() === 0) {
      return imcTable[0].rank;
    } else if (calculateImc() <= 18.5) {
      return imcTable[1].rank;
    } else if (calculateImc() >= 18.5 && calculateImc() <= 24.9) {
      return imcTable[2].rank;
    } else if (calculateImc() >= 25 && calculateImc() <= 29.9) {
      return imcTable[3].rank;
    } else if (calculateImc() >= 30 && calculateImc() <= 39.9) {
      return imcTable[4].rank;
    } else if (calculateImc() >= 40) {
      return imcTable[5].rank;
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
          <div className="calculation-result">
            <p className="imc-equals">O seu IMC é de:</p>
            <span className="imc-result">{calculateImc().toFixed(2)}</span>
          </div>
          <p className="ranking-result">
            Você se encontra no quadro: {returnRank()}
          </p>
        </Result>
        <ExtraContent>
          <h3>Como calcular o seu próprio IMC</h3>
          <p>
            O cálculo de IMC leva em consideração outros fatores além do seu
            peso e altura, como a sua idade e frequência de atitivade física,
            por exemplo. Porém, se você quiser aprender a calcular o seu IMC
            rapidamente, assim como essa página faz, basta fazer a fórmula
            <strong> peso / altura²</strong>.
          </p>
        </ExtraContent>
        <ExtraContent className="last-extra-content">
          <h3>Atenção:</h3>
          <p>
            Esse é um cálculo básico de IMC. Isso significa que essa fórmula
            pode não ser 100% precisa em todos os casos. Afinal, o cálculo de
            IMC mais preciso leva em consideração (além da altura e peso) o
            sexo, a idade e até mesmo a frequência de atividade física que você
            faz. Se você quiser saber o seu quadro exato em relação ao seu peso,{" "}
            <strong> sugerimos que procure um(a) nutricionista</strong>. Afinal,
            um profissional da saúde lhe informará não apenas a sua situação
            atual, mas também o direcionará para a solução.
          </p>
        </ExtraContent>
      </Container>
    </>
  );
}
