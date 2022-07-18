import "./App.css";
import {
  Navbar,
  Header,
  Experience,
  Footer,
  About,
  MyService,
  Portfolio,
  Testimonials,
  Contact,
} from "./components";

import { Container } from "@mui/system";
import { Heatmap } from "./components/Heatmap";

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
        <Heatmap />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
