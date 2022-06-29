import React from "react";
import "./App.css";
import { Navbar, Header, Experience, Footer } from "./components";
import { Container } from "@mui/system";
import { About } from "./components/About";
import { MyService } from "./components/Service";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Header />
        <About />
        <Experience />
        <MyService />
        <Portfolio />
        <Testimonials />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
