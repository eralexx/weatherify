import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Body from "./components/Body";
import ContextProvider from "./globalState/ContextProvider";
import React from "react";
import CustomCard from "./components/CustomCard";
import { Carousel } from "react-bootstrap";

const App = () => {
  return (
    // <ContextProvider>
    //   <Container>
    //     <Header />
    //     <Body />
    //   </Container>
    // </ContextProvider>
    <Carousel>
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
    </Carousel>
  );
};

export default App;
