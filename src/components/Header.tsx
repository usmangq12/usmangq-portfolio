import React from "react";
import { Grid, } from "@mui/material";
import { Heading, Image } from "../shared";

export const Header = () => {
  return (
    <Grid container pt={20}>
      <Grid item sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Grid xs={3}>
          <Image src="https://preview.colorlib.com/theme/calvin/assets/img/hero/xempolye.png.pagespeed.ic.zBM4C3aZP5.webp" />
        </Grid>
        <Grid xs={9} sx={{ pl: 8 }}>
          <Heading
            sx={{ color: "#fff", fontSize: "53px", fontWeight: "400" }}
            component="div"
            variant="h5"
          >
            My name is Calvin.
          </Heading>
          <Heading
            sx={{ color: "#fff", fontSize: "53px", fontWeight: "400" }}
            component="div"
            variant="h5"
          >
            Digital Product Designer
          </Heading>
          <Heading
            sx={{
              color: "#4db5ff",
              fontSize: "30px",
              fontWeight: "400",
              mt: 3,
            }}
            component="div"
            variant="h5"
          >
            Head of design at Calvino
          </Heading>
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex", mt: 12, width: "100%" }}>
        <Grid xs={4} sx={{ textAlign: "left" }}>
          <Heading sx={{ color: "#4db5ff" }}>Design For</Heading>
          <Heading sx={{fontSize:'26px'}}>Website</Heading>
        </Grid>
        <Grid xs={4} sx={{ textAlign: "center" }}>
          <Heading sx={{ color: "#4db5ff" }}>Phone</Heading>
          <Heading sx={{fontSize:'26px'}}>03007310142</Heading>
        </Grid>
        <Grid xs={4} sx={{ textAlign: "right" }}>
          <Heading sx={{ color: "#4db5ff" }}>Drop your Message</Heading>
          <Heading sx={{fontSize:'26px',textDecoration:'underline'}}>ahmadzulfiqar142@gamil.com</Heading>
        </Grid>
      </Grid>
    </Grid>
  );
};
