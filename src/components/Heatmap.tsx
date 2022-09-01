import { Heading } from "../shared";
import { Grid, Typography } from "@mui/material";

export const Heatmap = () => {
  return (
    <Grid sx={{ mb: "100px" }}>
      <Heading
        sx={{
          display: "block",
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
        In Last Year
      </Heading>
      <Heading
        sx={{
          display: "block",
          color: "#4db5ff",
          textAlign: "center",
          fontSize: "1.7rem",
          fontWeight: "700",
        }}
        variant="h3"
      >
        contributions
      </Heading>
      <Typography variant="h6" sx={{ color: "#d3d8db", pb: 1, mt: 12 }}>
        contributions in the last year
      </Typography>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          border: "1px solid #fff",
          p: 2,
        }}
      >
        <img width="100%" src="https://ghchart.rshah.org/usmangq12" />
      </Grid>
    </Grid>
  );
};
