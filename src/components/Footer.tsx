import { Grid, BottomNavigation, Button, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { navItems } from "../constants";

import { Heading } from "../shared";
export const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        backgroundColor: "#4db5ff",
        p: 2,
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
        gap={2}
      >
        <Heading
          sx={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1f1f38",
          }}
        >
          DevNodes
        </Heading>
        <Grid>
          <Grid
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            {navItems.map((item) => (
              <Link
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
          <FacebookIcon
            sx={{
              fontSize: "33.3px",
            }}
          />
          <TwitterIcon
            sx={{
              fontSize: "33.3px",
            }}
          />
          <GitHubIcon
            sx={{
              fontSize: "33.3px",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "33.3px",
            }}
          />
        </Grid>
        <Grid>
          <Heading
            sx={{ color: "#1f1f38", fontSize: "16px", fontWeight: "500" }}
          >
            © Copyright 2022, Ahmad
          </Heading>
        </Grid>
      </Grid>
    </BottomNavigation>
  );
};
