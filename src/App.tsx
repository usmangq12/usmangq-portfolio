import { Grid, Container } from "@mui/material";
import {
  Navbar,
  Header,
  Skills,
  Footer,
  About,
  Portfolio,
  Experience,
} from "./components";
import "./App.css";

function App() {
  return (
    <Grid>
      <Navbar />
      <Header />
      <Container>
        <Experience />
        <About />
        <Skills />
        <Portfolio />
      </Container>
      <Footer />
    </Grid>
  );
}

export default App;
