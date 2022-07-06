import { Grid, BottomNavigation, Button, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { navItems } from "../constants";

import { Heading } from "../shared";
export const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        backgroundColor: "#4db5ff",
        p: 4,
        height: "unset !important",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap={4}
      >
        <Heading
          sx={{
            fontSize: "2.2srem",
            fontWeight: "800",
            color: "#1f1f38",
          }}
        >
          Usman-gq
        </Heading>
        <Grid>
          <Grid
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            gap={3}
          >
            {navItems.map((item) => (
              <Link
                href={`#${item.name}`}
                sx={{
                  color: "#1f1f38",
                  fontWeight: "300",
                  fontSize: "15px",
                }}
              >
                {item.name}
              </Link>
            ))}
          </Grid>
        </Grid>
        <Grid sx={{ display: "flex" }} gap={2}>
          <Link
            href="https://twitter.com/Muhamma28090557"
            sx={{ color: "#1f1f38" }}
          >
            <TwitterIcon
              // sx={{
              //   fontSize: "33.3px",
              // }}
              sx={{
                border: "1px solid",
                fontSize: "25px",
                p: "3px",
                "&:hover": {
                  transform: "scale(1.2)",
                  transition: "all 0.5s ease",
                  background: "#1f1f38",
                  color: "#fff",
                },
              }}
            />
          </Link>

          <Link href="https://github.com/usmangq12" sx={{ color: "#1f1f38" }}>
            <GitHubIcon
              // sx={{
              //   fontSize: "33.3px",
              // }}
              sx={{
                border: "1px solid",
                fontSize: "25px",
                p: "3px",
                "&:hover": {
                  transform: "scale(1.2)",
                  transition: "all 0.5s ease",
                  background: "#1f1f38",
                  color: "#fff",
                },
              }}
            />
          </Link>
          <Link
            href="https://instagram.com/uxmangq?igshid=YmMyMTA2M2Y="
            sx={{ color: "#1f1f38" }}
          >
            <InstagramIcon
              // sx={{
              //   fontSize: "33.3px",
              // }}
              sx={{
                border: "1px solid",
                fontSize: "25px",
                p: "3px",
                "&:hover": {
                  transform: "scale(1.2)",
                  transition: "all 0.5s ease",
                  background: "#1f1f38",
                  color: "#fff",
                },
              }}
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/muhammad-usman-759b55129"
            sx={{ color: "#1f1f38" }}
          >
            <LinkedInIcon
              // sx={{
              //   fontSize: "33.3px",
              // }}
              sx={{
                border: "1px solid",
                fontSize: "25px",
                p: "3px",
                "&:hover": {
                  transform: "scale(1.2)",
                  transition: "all 0.5s ease",
                  background: "#1f1f38",
                  color: "#fff",
                },
              }}
            />
          </Link>
        </Grid>
        <Grid>
          <Heading
            sx={{ color: "#1f1f38", fontSize: "16px", fontWeight: "500" }}
          >
            © Copyright 2022, Usman
          </Heading>
        </Grid>
      </Grid>
    </BottomNavigation>
  );
};
