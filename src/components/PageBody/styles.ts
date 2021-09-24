import styled from "styled-components";

export const Container = styled.div`
  width: 1120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  padding: 3rem;

  p {
    font-size: 1.5rem;
  }

  input {
    height: 28px;
    width: 80px;
    border: 1px solid darkgray;
    border-radius: 0.5rem;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    text-align: center;
    height: 40px;
    font-size: 1.5rem;
  }

  .input-id {
    margin-right: 0.5rem;
    font-weight: 600;
  }

  .cm-after-input {
    margin-left: 0.5rem;
    margin-right: 3rem;
  }
  .kg-after-input {
    margin-left: 0.5rem;
  }

  .imc-equals {
    display: flex;
    font-size: 2rem;
  }

  .explanation {
    margin-bottom: 2rem;
  }
`;

export const InputArea = styled.div`
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Result = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  margin-top: 2rem;

  .calculation-result {
    display: flex;
  }

  .imc-result {
    margin-left: 1rem;
    font-weight: 600;
  }

  .ranking-result {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    display: flex;
  }
`;

export const ExtraContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background-color: #ffc251;
  padding: 1.5rem;
  border-radius: 2rem;
  transition: 300ms;
  cursor: default;

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
  }

  :hover {
        transition: 300ms;
        transform: scale(1.01);
    }
`;
