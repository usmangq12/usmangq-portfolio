import React from "react";
import "./App.css";
import { Navbar, Header, MyExperience } from "./components";
import { Container } from "@mui/system";
import { AboutMe } from "./components/AboutMe";
import { MyService } from "./components/MyService";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Header />
        <AboutMe/>
        <MyExperience/>
        <MyService/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
      </Container>
    </div>
  );
}

export default App;
