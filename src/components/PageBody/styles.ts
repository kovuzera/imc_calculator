import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  width: 1120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 3rem;

  input {
      height: 28px;
      width: 80px;
      border: none;
      -webkit-appearance: none;
      -moz-appearance: textfield;
      text-align: center;

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
`;

export const InputArea = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input {
      display: flex;
    width: 100px;
  }
`;
