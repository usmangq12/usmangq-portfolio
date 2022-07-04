import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { Heading } from "../shared";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { frontendLanguages, backendLanguages } from "../constants";

export const Experience = () => {
  return (
    <Grid container direction={"column"} id="EXPERIENCES">
      <Heading
        sx={{
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
        What Skills I Have
      </Heading>
      <Heading
        sx={{
          color: "#4db5ff",
          textAlign: "center",
          fontSize: "1.7rem",
          fontWeight: "700",
        }}
        variant="h3"
      >
        My Experience
      </Heading>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          mt: { xs: 4, sm: 11 },
        }}
        gap={1}
      >
        <Grid
          xs={12}
          sm={4.25}
          sx={{ display: "flex", justifyContent: "center", p: 2 }}
        >
          <Card sx={{ borderRadius: "2rem", p: { xs: 0, lg: 4 } }}>
            <CardContent>
              <Heading
                sx={{
                  color: "#4db5ff",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Frontend Development
              </Heading>
              <Grid sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                {frontendLanguages.map((frontendData) => (
                  <Grid
                    sx={{ display: "flex", alignItems: "baseline", mb: 2 }}
                    xs={6}
                  >
                    <CheckCircleIcon sx={{ color: "#4db5ff", mr: 1.5 }} />
                    <Grid>
                      <Heading
                        sx={{
                          fontSize: { xs: ".8rem", sm: "1.2rem" },
                          fontWeight: "700",
                        }}
                      >
                        {frontendData}
                      </Heading>
                      <Heading sx={{ fontSize: ".8rem", fontWeight: "300" }}>
                        Experienced
                      </Heading>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          xs={12}
          sm={4.25}
          sx={{ display: "flex", justifyContent: "center", p: 2 }}
        >
          <Card sx={{ borderRadius: "2rem", p: { xs: 0, lg: 4 } }}>
            <CardContent>
              <Heading
                sx={{
                  color: "#4db5ff",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Backend Development
              </Heading>
              <Grid sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                {backendLanguages.map((backend) => (
                  <Grid
                    sx={{ display: "flex", alignItems: "baseline", mb: 2 }}
                    xs={6}
                  >
                    <CheckCircleIcon sx={{ color: "#4db5ff", mr: 1.5 }} />
                    <Grid>
                      <Heading
                        sx={{
                          fontSize: { xs: ".8rem", sm: "1.2rem" },
                          fontWeight: "700",
                        }}
                      >
                        {backend}
                      </Heading>
                      <Heading sx={{ fontSize: ".8rem", fontWeight: "300" }}>
                        Experienced
                      </Heading>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
