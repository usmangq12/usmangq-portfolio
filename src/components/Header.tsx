import { useEffect, useRef } from "react";
import { Grid, Container, Box } from "@mui/material";
import Typed from "typed.js";
import { Heading, Image } from "../shared";
import { Profile, Backgroundimage } from "../assets/imges";

export const Header = () => {
  const text = ["Muhammad USMAN", " Web Developer"];
  const divRef: any = useRef();
  useEffect(() => {
    const options = {
      strings: text,
      stringsElement: "#typed-string",
      typeSpeed: 50,
      showCursor: true,
      backSpeed: 20,
      smartBackspace: false,
      shuffle: true,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
    };

    const typed = new Typed(divRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [text]);

  return (
    <Grid
      container
      height={"100vh"}
      alignItems={"center"}
      pt={{ xs: 10, sm: 20 }}
      id={"HOME"}
      sx={{
        position: "relative",
        zIndex: "1",
        backgroundImage: `url(${Backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          background: "black",
          opacity: ".6",
          zIndex: "-1",
          width: "100%",
          height: "100%",
        }}
      />
      <Container>
        <Grid
          item
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid
            xs={12}
            sm={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              px: { xs: 2, sm: 0 },
            }}
          >
            <Grid
              sx={{
                borderRadius: "50%",
                border: "3px solid #fff",
                p: 1.2,
                overflow: "hidden",
              }}
            >
              <Image
                sx={{
                  width: {
                    xs: "300px",
                    sm: "auto",
                    borderRadius: "50%",
                    transform: "scale(1)",
                    transition: "all 0.5s ease",
                  },
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
                src={Profile}
              />
            </Grid>
          </Grid>
          <Grid
            xs={12}
            sm={9}
            sx={{
              pl: { xs: 0, sm: 8 },
              mt: { xs: 3, sm: 0 },
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            <Heading
              sx={{
                color: "#fff",
                fontSize: { sm: "33px", md: "53px" },
                fontWeight: "400",
              }}
              component="div"
              variant="h5"
            >
              <span>I am&nbsp;</span>

              <span ref={divRef} />
            </Heading>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            mt: { xs: 5, sm: 12 },
            width: "100%",
            textAlign: "center",
            justifyContent: { xs: "center", sm: "space-between" },
            flexDirection: { xs: "column", sm: "unset" },
          }}
        >
          <Grid>
            <Heading
              sx={{ color: "#4db5ff", fontSize: { xs: "16px", sm: "20px" } }}
            >
              Code For
            </Heading>
            <Heading sx={{ fontSize: { xs: "16px", sm: "20px" } }}>Web</Heading>
          </Grid>
          <Grid>
            <Heading
              sx={{ color: "#4db5ff", fontSize: { xs: "16px", sm: "20px" } }}
            >
              Phone
            </Heading>
            <Heading sx={{ fontSize: { xs: "16px", sm: "20px" } }}>
              +92 311 4942040
            </Heading>
          </Grid>
          <Grid>
            <Heading
              sx={{ color: "#4db5ff", fontSize: { xs: "16px", sm: "20px" } }}
            >
              Drop your Message
            </Heading>
            <Heading
              sx={{
                textDecoration: "underline",
                fontSize: { xs: "16px", sm: "20px" },
              }}
            >
              usmangq12@gmail.com
            </Heading>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
