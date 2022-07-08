import { Grid, BottomNavigation, Button, Link } from "@mui/material";
import { navItems } from "../constants";

import { Heading } from "../shared";
import { SocialIcons } from "./SocialIcons";
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
            {navItems.map((item: string) => (
              <Link
                href={`#${item}`}
                sx={{
                  color: "#1f1f38",
                  fontWeight: "300",
                  fontSize: "15px",
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>
        </Grid>
        <SocialIcons styles={{ background: "#4db5ff", color: "#fff" }} />
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
