import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Body from "./components/Body";
import ContextProvider from "./globalState/ContextProvider";
import React from "react";

const App = () => {
  return (
    <ContextProvider>
      <Container>
        <Header />
        <Body />
      </Container>
    </ContextProvider>
  );
};

export default App;
