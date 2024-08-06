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
import { useEffect, useState } from "react";
import "./App.css";
import { Logo } from "./components/Logo";
import { VideoIntroduction } from "./components/VideoInroduction";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Grid
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Logo />
        </Grid>
      ) : (
        <Grid>
          <Navbar />
          <Header />
          <Container>
            <VideoIntroduction/>
            <Experience />
            <About />
            <Skills />
            <Portfolio />
          </Container>
          <Footer />
        </Grid>
      )}
    </>
  );
}

export default App;
