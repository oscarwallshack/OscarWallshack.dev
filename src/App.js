import { Fragment } from "react";
import CounterBar from "./components/Layout/CounterBar/CounterBar";
import Header from "./components/Layout/Header/Header";
import Hero from "./components/Layout/Hero/Hero";
import Projects from "./components/Layout/Projects/Projects";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <CounterBar />
      <Projects />
    </Fragment>
  );        
}

export default App;
