import React from "react";
import { Heading } from "../shared";
import { Box, Grid } from "@mui/material";

export const VideoIntroduction = () => {
  return (
    <>
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
          Video Introduction
        </Heading>
      </Grid>
      <div style={{ textAlign: "center", margin: "20px 20px" }}>
        <Grid item mb={{ xs: 4, sm: 12.5 }}>
          <iframe
            src="https://www.loom.com/embed/52a0ea1e51f64e7e9f2e981b4b34939d?sid=74a5cd46-ebab-4986-a49f-cb0745ab9eeb"
            width="100%"
            height="500"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Loom Video"
          ></iframe>
        </Grid>
      </div>
    </>
  );
};
