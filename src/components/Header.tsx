import React from "react";
import { Grid, Container, Box, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Heading, Image } from "../shared";
import { Profile } from "../assets/imges";


export const Header = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      height={"100vh"}
      alignItems={"center"}
      id={"HOME"}
      sx={{
        position: "relative",
        zIndex: "1",
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down('lg')]: {
          // backgroundColor: theme.palette.success.main,
          height: "auto",
         textAlign: "left",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
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
            [theme.breakpoints.down('lg')]: {
              // backgroundColor: theme.palette.success.main,
              marginTop: "80px"
             
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              px: { xs: 2, sm: 0 },
            }}
          >
            <Grid
              item
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
                  },
                  borderRadius: "50%",
                  transform: "scale(1)",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
                src={Profile}
              />
            </Grid>
          </Grid>
          <Grid
            item
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
                color: "secondary.main",
                fontSize: { sm: "18px", md: "18px" },
                fontWeight: "300",
              }}
              component="div"
              variant="h5"
            >
              <span>Hi, my name is</span>
            </Heading>
            <Heading
              sx={{
                color: "#ccd6f6",
                fontSize: { sm: "20px", md: "53px" },
                fontWeight: "400",
              }}
              component="div"
              variant="h5"
            >
              Muhammad USMAN.
            </Heading>
            <Heading
              sx={{
                color: "#8892b0",
                fontSize: { sm: "20px", md: "53px" },
                fontWeight: "400",
              }}
              component="div"
              variant="h5"
            >
              I build things for the web.
            </Heading>
            <Grid item sm={9}>
              <Heading
                sx={{
                  color: "#8892b0",
                  fontSize: { sm: "20px", md: "23px" },
                  fontWeight: "400",
                  display: "inline-block",
                }}
                component="div"
                variant="h5"
              >
                With six years of dedicated experience as a software engineer, I have honed my skills in the remote landscape, specializing in both web and mobile application development.
                Currently, I’m currently working with &nbsp;
                <Link
                  underline="none"
                  target="_blank"
                  href="https://akvelon.com/"
                  sx={{
                    color: "secondary.main",
                    fontWeight: "400",
                    fontSize: { sm: "20px", md: "23px" },
                  }}
                >
                  Akvelon
                </Link>
              </Heading>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
