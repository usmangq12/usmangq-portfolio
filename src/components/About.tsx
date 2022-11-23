import React from "react";
import { Grid, Card, Link } from "@mui/material";
import { Image, Heading } from "../shared";
import { Profilepicture } from "../assets/imges";
import { SocialIcons } from "./SocialIcons";

export const About = () => {
  return (
    <Grid container id="ABOUT">
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Heading
          sx={{
            display: "block",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "700",
          }}
        >
          Get to know
        </Heading>
        <Heading
          sx={{
            display: "block",
            color: "secondary.main",
            textAlign: "center",
            fontSize: "1.7rem",
            fontWeight: "700",
          }}
          variant="h3"
        >
          About Me
        </Heading>
      </Grid>
      <Grid sx={{ display: "flex", mt: { xs: 4, sm: 12 }, flexWrap: "wrap" }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              display: { xs: "none", sm: "block" },
              maxWidth: 345,
              position: "relative",
              overflow: "inherit",
              bgcolor: "transparent",
              py: 0.5,
              px: 1.2,
              "&:before": {
                content: `''`,
                position: "absolute",
                top: "0",
                left: "0",
                bgcolor: "secondary.main",
                width: "100%",
                height: "100%",
                borderRadius: "2rem",
              },
            }}
          >
            <Image
              component="img"
              width="100%"
              height="325"
              src={Profilepicture}
              alt="green iguana"
              sx={{
                display: { xs: "none", sm: "block" },
                borderRadius: "2rem",
                transition: "all .3s",
                transform: "rotate(10deg)",
                "&:hover": { transform: "rotate(0deg)" },
              }}
            ></Image>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid xs={10}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "unset" },
                gap: 4,
              }}
            >
              <SocialIcons
                styles={{ background: "#4db5ff", color: "secondary.main" }}
              />
            </Grid>
            <Grid xs={12} sm={10}>
              <Heading
                variant="body2"
                sx={{ fontSize: "16px", lineHeight: "unset", mt: 4 }}
              >
                I’m a community-taught developer with 4 plus years of
                experience. I love reading and enhancing my knowledge day by
                day, and love to solve complex problems. I’m always ready for
                new challenges which keep me motivated to move on in the coding
                field at another level.
              </Heading>
            </Grid>
            <Grid sx={{ mt: 4 }}>
              <Link
                href="https://join.skype.com/invite/MDJ44XPKrkCa"
                underline="none"
                bgcolor="secondary.main"
                sx={{
                  borderRadius: "8px",
                  color: "info.main",
                  p: "9px 32px",
                }}
              >
                Let's Talk
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
