import { Grid, Container } from "@mui/material";
import {
  Navbar,
  Header,
  Experience,
  Footer,
  About,
  Portfolio,
} from "./components";
import "./App.css";

function App() {
  return (
    <Grid className="App">
      <Navbar />
      <Header />
      <Container>
        <About />
        <Experience />
        <Portfolio />
      </Container>
      <Footer />
    </Grid>
  );
}

export default App;
