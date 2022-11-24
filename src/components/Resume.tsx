import { Grid } from "@mui/material";
import React from "react";
import { Image, Heading } from "../shared";
import { Resumes } from "../assets/imges";

export const Resume = () => {
  return (
    <Grid container id={"Resume"} justifyContent="center">
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
          My Resumes
        </Heading>
      </Grid>
      <Image src={Resumes} />
    </Grid>
  );
};
