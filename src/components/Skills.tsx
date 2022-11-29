import React from "react";
import { Grid, Card, CardContent, Link } from "@mui/material";
import { Heading } from "../shared";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { frontendLanguages, backendLanguages } from "../constants";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Skills = () => {
  return (
    <Grid container direction={"column"} id="EXPERIENCES">
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
          What Skills I Have
        </Heading>
      </Grid>
      <Grid item>
        <Grid item xs={12} sx={{ p: 2 }}>
          <Accordion sx={{ backgroundColor: "secondary.main" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "info.main" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Heading
                sx={{
                  color: "info.main",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Frontend Development
              </Heading>
            </AccordionSummary>
            <AccordionDetails>
              <Card
                sx={{
                  borderRadius: "2rem",
                  p: { xs: 0, lg: 4 },
                  boxShadow: "unset",
                }}
              >
                <CardContent>
                  <Grid item sx={{ display: "flex", flexWrap: "wrap" }}>
                    {frontendLanguages.map((frontendData, index) => (
                      <Grid
                        key={index}
                        item
                        sx={{
                          display: "flex",
                          alignItems: "baseline",
                          flexWrap: "wrap",
                          mb: 2,
                        }}
                        xs={6}
                        sm={4}
                        md={3}
                      >
                        <CheckCircleIcon sx={{ color: "info.main", mr: 1.5 }} />
                        <Grid item>
                          <Heading
                            sx={{
                              fontSize: { xs: ".8rem", sm: "1.2rem" },
                              fontWeight: "700",
                            }}
                          >
                            {frontendData.name}
                          </Heading>

                          <Heading
                            sx={{ fontSize: ".8rem", fontWeight: "300" }}
                          >
                            Experienced
                          </Heading>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sx={{ p: 2 }}>
          <Accordion sx={{ backgroundColor: "secondary.main" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "info.main" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Heading
                sx={{
                  color: "info.main",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Backend Development
              </Heading>
            </AccordionSummary>
            <AccordionDetails>
              <Card
                sx={{
                  borderRadius: "2rem",
                  p: { xs: 0, lg: 4 },
                  boxShadow: "unset",
                }}
              >
                <CardContent>
                  <Grid item sx={{ display: "flex", flexWrap: "wrap" }}>
                    {backendLanguages.map((backend, index) => (
                      <Grid
                        item
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "baseline",
                          mb: 2,
                        }}
                        xs={6}
                        sm={4}
                        md={3}
                      >
                        <CheckCircleIcon sx={{ color: "info.main", mr: 1.5 }} />
                        <Grid item>
                          <Heading
                            sx={{
                              fontSize: { xs: ".8rem", sm: "1.2rem" },
                              fontWeight: "700",
                            }}
                          >
                            {backend.name}
                          </Heading>
                          <Heading
                            sx={{ fontSize: ".8rem", fontWeight: "300" }}
                          >
                            Experienced
                          </Heading>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Grid>
  );
};
