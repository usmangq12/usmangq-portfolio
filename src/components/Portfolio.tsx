import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Link,
} from "@mui/material";
import { Heading, Image } from "../shared";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { images } from "../constants";

export const Portfolio = () => {
  return (
    <Grid container direction={"column"} id={"PORTFOLIO"}>
      <Heading
        sx={{
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
        What I Offer
      </Heading>
      <Heading
        sx={{
          color: "#4db5ff",
          textAlign: "center",
          fontSize: "1.7rem",
          fontWeight: "700",
        }}
        variant="h3"
      >
        Portfolio
      </Heading>

      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: { xs: 4, sm: 12 },
        }}
      >
        {images.map((img) => (
          <Grid
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center", p: 3 }}
          >
            <Card
              sx={{
                borderTopRightRadius: "2rem",
                borderTopLeftRadius: "2rem",
                p: 2,
              }}
            >
              <Image
                component="img"
                sx={{
                  borderTopRightRadius: "2rem",
                  borderTopLeftRadius: "2rem",
                }}
                width="100%"
                height="300"
                src={img.img_poster}
                alt="green iguana"
              ></Image>
              <CardContent>
                <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
                  <Grid>
                    <Heading
                      sx={{
                        fontSize: "19.2px",
                        fontWeight: "700",
                        lineHeight: "unset",
                      }}
                    >
                      {img.text}
                    </Heading>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "self-end",
                    justifyContent: "center",

                    mb: 5,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "#4db5ff",
                      borderRadius: "8px",
                      p: "9px 32px",
                    }}
                  >
                    GitHub
                  </Button>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      fontSize: "16px",
                      color: "#4db5ff",
                      mb: 1,
                      ml: 2,
                    }}
                  >
                    Live Demo
                    <CallMadeIcon sx={{ ml: "2px" }} />
                  </Link>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
