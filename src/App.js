import { Fragment } from "react";
import AboutMe from "./components/Layout/Introduce/Introduce";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Hero from "./components/Layout/Hero/Hero";
import Projects from "./components/Layout/Projects/Projects";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </Fragment>
  );        
}

export default App;
