import { Fragment, useState } from "react";
import AboutMe from "./components/Layout/Introduce/Introduce";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Hero from "./components/Layout/Hero/Hero";
import Projects from "./components/Layout/Projects/Projects";
import ContactDetails from "./components/Layout/Contact/ContactDetails";

function App() {
  const [contactModalShown, setContactModalShown] = useState(false);

  const showContactModalShown = () => {
    setContactModalShown(true);
  };

  const hideContactModalHandler = () => {
    setContactModalShown(false);
  };

  return (
    <Fragment>
      {contactModalShown && (
        <ContactDetails onClose={hideContactModalHandler} />
      )}
      <Header />
      <Hero onShowContactDetails={showContactModalShown} />
      <Projects />
      <AboutMe />
      <Footer />
    </Fragment>
  );
}

export default App;
