import { Grid, Container } from "@mui/material";
import { SocialIcons } from "./SocialIcons";
export const Footer = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#112240",
        p: 1,
        height: "unset !important",
      }}
    >
      <Grid
        item
        sx={{
          width: "100%",
        }}
      >
        <Container>
          <SocialIcons styles={{ background: "#4db5ff", color: "#fff" }} />
        </Container>
      </Grid>
    </Grid>
  );
};
