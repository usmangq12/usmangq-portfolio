import { Grid, Container, Box, Link } from "@mui/material";
import { Heading, Image } from "../shared";
import { Profile } from "../assets/imges";

export const Header = () => {
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
        backgroundSize: "cover",
        backgroundPosition: "center",
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
                fontSize: { sm: "23px", md: "18px" },
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
                fontSize: { sm: "33px", md: "53px" },
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
                fontSize: { sm: "33px", md: "53px" },
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
                  fontSize: { sm: "33px", md: "23px" },
                  fontWeight: "400",
                  display: "inline-block",
                }}
                component="div"
                variant="h5"
              >
                I’m a software engineer with 4 plus years of experience in React
                with Typescript. Currently, I’m building ride sharing
                application at &nbsp;
                <Link
                  underline="none"
                  target="_blank"
                  href="https://www.sharemobility.com/"
                  sx={{
                    // display: "flex",
                    marginRight: 3,
                    // float: "right",
                    flexDirection: "column",
                    // alignItems: "center",
                    // justifyContent: "center",
                    color: "secondary.main",
                    fontWeight: "400",
                    fontSize: { sm: "33px", md: "23px" },
                    textAlign: "center",
                  }}
                >
                  Share-Mobility.
                </Link>
              </Heading>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid
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
        </Grid> */}
      </Container>
    </Grid>
  );
};
