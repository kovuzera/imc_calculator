import React from "react";
import { Page } from "./components/Header";
import { PageBody } from "./components/PageBody";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Page />
      <PageBody />
      <GlobalStyle />
    </>
  );
}

export default App;
