import { Grid, BottomNavigation, Container } from "@mui/material";
import { SocialIcons } from "./SocialIcons";
export const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        backgroundColor: "#4db5ff",
        p: 1,
        height: "unset !important",
      }}
    >
      <Grid
        sx={{
          width: "100%",
        }}
      >
        <Container>
          <SocialIcons styles={{ background: "#4db5ff", color: "#fff" }} />
        </Container>
      </Grid>
    </BottomNavigation>
  );
};
