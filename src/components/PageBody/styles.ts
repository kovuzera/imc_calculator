import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 8rem;

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
    font-size: 1rem;

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
  background-color: var(--background);
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Result = styled.div`
  user-select: none;
  display: flex;
  font-size: 2rem;
  margin-top: 2rem;
  /* background-color: red; */

  .imc-result {
    margin-left: 1rem;
    font-weight: 600;
  }
`;
