import { Grid, Card, Link } from "@mui/material";
import { Heading } from "../shared";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
const portfolioDetail = [
  // {
  //   title: "Cart Mall",
  //   description:
  //     "Building websites for higher-ed is not for the faint of heart.Unless executed properly.",
  //   forntEndLange: "Rect.js",
  //   ui: "Material UI",
  //   gitHub: "https://github.com/usmangq12/cart-mall",
  //   liveDemo: "",
  // },
  // {
  //   title: "penze",
  //   description:
  //     "Creating a blogging application where user can create blogs, display them in a grid and on selection displaying blog details.",
  //   forntEndLange: "Rect.js",
  //   ui: "Material UI",
  //   gitHub: "https://github.com/usmangq12/penze",
  // },
  {
    title: "Personality Test",
    description:
      "A simple human personality test that guesses the user's personality based on survey questions. End result displays user's nature whether as Introvert or Extrovert.",
    forntEndLange: "Rect.js",
    ui: "Material UI",
    gitHub: "https://github.com/usmangq12/personality-test",
    liveDemo: "https://personality-test-pd9c.vercel.app/",
  },
  {
    title: "Unlock Power Dreams",
    description:
      "Creating a unlock your dreams concept of page with web and mobile design responsiveness with the MUI and adding animation to it.",
    forntEndLange: "Rect.js",
    ui: "Material UI",
    gitHub: "https://github.com/usmangq12/Unlock.Power.Dreams",
    liveDemo: "https://unlock-power-dreams.netlify.app/",
  },
  {
    title: "Currency Converter",
    description:
      "Currency converter to show the selected currency current rates into USD and EUR.",
    forntEndLange: "Rect.js",
    ui: "Material UI",
    gitHub: "https://github.com/usmangq12/currency-converter",
    liveDemo: "https://currency-converter-one-ecru.vercel.app/",
  },
  // {
  //   title: "Games Hub",
  //   description:
  //     "Building websites for higher-ed is not for the faint of heart.Unless executed properly.",
  //   forntEndLange: "Rect.js",
  //   ui: "Material UI",
  //   gitHub:
  //     "Creating multiple games Tic-Tac-Toe Hang-Man and Cards-Game in one...",
  //   liveDemo: "",
  // },
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
      {/* <Grid
        item
        container
        sx={{
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
            p={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                borderTopRightRadius: "2rem",
                borderTopLeftRadius: "2rem",
                p: 2,
                display: "flex",
                flexDirection: "column",
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
                    flexWrap: { xs: "wrap", sm: "nowrap" },

                    mb: 5,
                  }}
                >
                  <Link
                    href={img.path}
                    target="_blank"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "primary.main",
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: "primary.main",
                      color: "info.main",
                      height: "40px",
                      width: "150px",
                      maxWidth: "100%",
                      textAlign: "center",
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "primary.main",
                      borderRadius: "8px",
                      fontSize: "16px",
                      border: "1px solid",
                      borderColor: "primary.main",
                      color: "info.main",
                      width: "150px",
                      maxWidth: "100%",
                      height: "40px",
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
      </Grid> */}
      <Grid
        item
        container
        sx={{
          justifyContent: "center",
        }}
      >
        {portfolioDetail.map(
          (
            { title, description, forntEndLange, ui, gitHub, liveDemo },
            index
          ) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              p={2}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "all 0.4s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Grid item>
                    <FolderOpenIcon
                      sx={{ fontSize: "40px", color: "#4DB5FF" }}
                    />
                  </Grid>
                  <Grid item>
                    <Link href={gitHub} target="_blank" underline="none">
                      <GitHubIcon
                        sx={{
                          fontSize: "22px",
                          color: "info.main",
                          "&:hover": { color: "#4DB5FF" },
                        }}
                      />
                    </Link>
                    <Link
                      href={liveDemo}
                      target="_blank"
                      ml={2}
                      underline="none"
                    >
                      <OpenInNewIcon
                        sx={{
                          fontSize: "22px",
                          color: "info.main",
                          "&:hover": { color: "#4DB5FF" },
                        }}
                      />
                    </Link>
                  </Grid>
                </Grid>

                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Grid item mb={2}>
                    <Heading
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        lineHeight: "unset",
                        color: "info.light",
                        "&:hover": { color: "#4DB5FF" },
                      }}
                    >
                      {title}
                    </Heading>
                    <Heading
                      sx={{
                        fontSize: "17px",
                        fontWeight: "300",
                        lineHeight: "unset",
                        color: "info.main",
                        mt: 1,
                      }}
                    >
                      {description}
                    </Heading>
                  </Grid>
                  <Grid item display={"flex"} alignItems={"center"} mt={"auto"}>
                    <Heading
                      sx={{
                        fontSize: "16px",
                        fontWeight: "300",
                        lineHeight: "unset",
                        color: "info.main",
                      }}
                    >
                      {forntEndLange}
                    </Heading>
                    <Heading
                      sx={{
                        fontSize: "16px",
                        fontWeight: "300",
                        lineHeight: "unset",
                        color: "info.main",
                        ml: 3,
                      }}
                    >
                      {ui}
                    </Heading>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  );
};
