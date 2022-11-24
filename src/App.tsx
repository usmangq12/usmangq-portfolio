import { Grid, Container } from "@mui/material";
import {
  Navbar,
  Header,
  Experience,
  Footer,
  About,
  Portfolio,
  Resume,
  Work,
} from "./components";
import "./App.css";

function App() {
  return (
    <Grid className="App">
      <Navbar />
      <Header />

      <Container>
        <Work />
        <About />
        <Experience />
        <Portfolio />
        <Resume />
      </Container>
      <Footer />
    </Grid>
  );
}

export default App;
