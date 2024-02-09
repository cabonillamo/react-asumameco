import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Theme";
import Navigation from "./components/landing/navbar/Navigation";
import Home from "./components/landing/sections/Home";
import About from "./components/landing/sections/About";
import Guide from "./components/landing/sections/Guide";
import Team from "./components/landing/sections/Team";
import Faq from "./components/landing/sections/Faq";
import Footer from "./components/landing/footer/Footer";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Guide />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
