import { Fragment } from "react";
import Header from "./components/Layout/Header/Header";
import Hero from "./components/Layout/Hero/Hero";
import Projects from "./components/Layout/Projects/Projects";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Projects />
    </Fragment>
  );        
}

export default App;
