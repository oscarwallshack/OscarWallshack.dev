import { Fragment } from "react";
import CounterBar from "./components/Layout/CounterBar/CounterBar";
import Header from "./components/Layout/Header/Header";
import Hero from "./components/Layout/Hero/Hero";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <CounterBar />
    </Fragment>
  );        
}

export default App;
