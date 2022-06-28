import React from "react";
import { Grid, Card, CardContent,} from "@mui/material";
import { Heading } from "../shared";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const frondendLanguage = [
  "HTML",
  "CSS",
  "SASS",
  "Bootstrap",
  "JavaScript",
  " React JS",
];

const backendLanguage = ["Node JS", "PHP", "Python", "MongoDb", "MySQL"];
export const MyExperience = () => {
  return (
    <Grid container direction={"column"}>
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

      <Grid sx={{ display: "flex", justifyContent: "center", mt: 12 }} gap={6}>
        <Grid xs={4.25} sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ borderRadius: "2rem", p: 4 }}>
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
              <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
                {frondendLanguage.map((frontendData) => (
                  <Grid
                    sx={{ display: "flex", alignItems: "baseline", mb: 2 }}
                    xs={6}
                  >
                    <CheckCircleIcon sx={{ color: "#4db5ff", mr: 1.5 }} />
                    <Grid>
                      <Heading sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
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
        <Grid xs={4.25} sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ borderRadius: "2rem", p: 4 }}>
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
              <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
                {backendLanguage.map((backend) => (
                  <Grid
                    sx={{ display: "flex", alignItems: "baseline", mb: 2 }}
                    xs={6}
                  >
                    <CheckCircleIcon sx={{ color: "#4db5ff", mr: 1.5 }} />
                    <Grid>
                      <Heading sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
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
