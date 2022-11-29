import { Grid, Card, CardContent, CardActions, Link } from "@mui/material";
import { Heading, Image } from "../shared";
import CallMadeIcon from "@mui/icons-material/CallMade";

const portfolioDetail = [
  {
    img_poster: "https://rococo-babka-760a17.netlify.app/images/login.jpg",
    text: "Login and Registration Form",
    path: "https://github.com/usmangq12",
  },
  {
    img_poster: "https://rococo-babka-760a17.netlify.app/images/fylo.jpg",
    text: "Fylo Landing Page",
    path: "https://github.com/usmangq12",
  },
  {
    img_poster: "https://rococo-babka-760a17.netlify.app/images/mist.jpg",
    text: "Mist Garden",
    path: "https://github.com/usmangq12",
  },
  {
    img_poster: "https://rococo-babka-760a17.netlify.app/images/weather.jpg",
    text: "Web Weather Application",
    path: "https://github.com/usmangq12",
  },
  {
    img_poster: "https://rococo-babka-760a17.netlify.app/images/note.jpg",
    text: "Note Application",
    path: "https://github.com/usmangq12",
  },
  {
    img_poster: "https://rococo-babka-760a17.netlify.app/images/filterable.jpg",
    text: "Note Application",
    path: "https://github.com/usmangq12",
  },
];

export const Portfolio = () => {
  return (
    <Grid container direction={"column"} id={"PORTFOLIO"}>
      <Grid item mb={{ xs: 4, sm: 12.5 }}>
        <Heading
          sx={{
            color: "secondary.main",
            textAlign: "center",
            fontSize: "1.7rem",
            fontWeight: "700",
          }}
          variant="h3"
        >
          Portfolio
        </Heading>
      </Grid>

      <Grid
        item
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {portfolioDetail.map((img, index) => (
          <Grid
            key={index}
            item
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
                <Grid item sx={{ display: "flex", flexWrap: "wrap" }}>
                  <Grid item>
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
                  item
                  sx={{
                    display: "flex",
                    alignItems: "self-end",
                    justifyContent: "center",

                    mb: 5,
                  }}
                >
                  <Link
                    href={img.path}
                    target="_blank"
                    underline="none"
                    sx={{
                      backgroundColor: "primary.main",
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: "primary.main",
                      color: "info.main",
                      p: "9px 32px",
                      "&:hover": {
                        backgroundColor: "info.main",
                        border: "1px solid",
                        borderColor: "info.main",
                        color: "primary.main",
                      },
                    }}
                  >
                    GitHub
                  </Link>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      backgroundColor: "primary.main",
                      borderRadius: "8px",
                      fontSize: "16px",
                      border: "1px solid",
                      borderColor: "primary.main",
                      color: "info.main",
                      p: "9px 24px",
                      ml: 2,
                      whiteSpace: "nowrap",
                      "&:hover": {
                        backgroundColor: "info.main",
                        border: "1px solid",
                        borderColor: "info.main",
                        color: "primary.main",
                      },
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
