import React from "react";
import { Grid, Card, CardContent, CardHeader, Collapse } from "@mui/material";
import { Heading } from "../shared";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const sevices = [
  "Lorem ipsum dolor sit amet, id lacus consectetur adipiscing elit. Vivamus egestas, luctus eni",
  "Lorem ipsum dolor sit amet, id lacus consectetur adipiscing elit. Vivamus egestas, luctus eni",
  "Lorem ipsum dolor sit amet, id lacus consectetur adipiscing elit. Vivamus egestas, luctus eni",
  "Lorem ipsum dolor sit amet, id lacus consectetur adipiscing elit. Vivamus egestas, luctus eni",
  "Lorem ipsum dolor sit amet, id lacus consectetur adipiscing elit. Vivamus egestas, luctus eni",
  " Lorem ipsum dolor sit amet, id lacus consectetur adipiscing elit. Vivamus egestas, luctus eni",
];
const backendLanguage = ["Node JS", "PHP", "Python", "MongoDb", "MySQL"];

export const MyService = () => {
  return (
    <Grid container direction={"column"}>
      <Heading
        sx={{
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
       What I Offer
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
       My Service
      </Heading>
      <Grid sx={{ display: "flex", justifyContent: "center", mt: 12 }} gap={6}>
        <Grid xs={4.25} sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              borderBottomLeftRadius: "2rem",
              borderBottomRightRadius: "2rem",
            }}
          >
            <CardHeader
              sx={{
                backgroundColor: "#4db5ff",
                color: "#fff",
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
              title="Web Development"
            />
            <CardContent>
              <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
                {sevices.map((servicesData) => (
                  <Grid
                    sx={{ display: "flex", alignItems: "baseline", mb: 2 }}
                    xs={12}
                  >
                    <CheckCircleIcon sx={{ color: "#4db5ff", mr: 1.5 }} />
                    <Grid>
                      <Heading sx={{ fontSize: "16px", lineHeight: "unset" }}>
                        {servicesData}
                      </Heading>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4.25} sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              borderBottomLeftRadius: "2rem",
              borderBottomRightRadius: "2rem",
            }}
          >
            <CardHeader
              sx={{
                backgroundColor: "#4db5ff",
                color: "#fff",
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
              title="Brand Identity"
            />
            <CardContent>
              <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
                {sevices.map((servicesData) => (
                  <Grid
                    sx={{ display: "flex", alignItems: "baseline", mb: 2 }}
                    xs={12}
                  >
                    <CheckCircleIcon sx={{ color: "#4db5ff", mr: 1.5 }} />
                    <Grid>
                      <Heading sx={{ fontSize: "16px", lineHeight: "unset" }}>
                        {servicesData}
                      </Heading>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4.25} sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              borderBottomLeftRadius: "2rem",
              borderBottomRightRadius: "2rem",
            }}
          >
            <CardHeader
              sx={{
                backgroundColor: "#4db5ff",
                color: "#fff",
                textAlign: "center",
              }}
              title="UI Design"
            />
            <CardContent>
              <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
                {sevices.map((servicesData) => (
                  <Grid
                    sx={{ display: "flex", alignItems: "baseline", mb: 2 }}
                    xs={12}
                  >
                    <CheckCircleIcon sx={{ color: "#4db5ff", mr: 1.5 }} />
                    <Grid>
                      <Heading sx={{ fontSize: "16px", lineHeight: "unset" }}>
                        {servicesData}
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
