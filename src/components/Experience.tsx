import React from "react";
import { Grid, Card, CardContent, Link } from "@mui/material";
import { Heading } from "../shared";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { frontendLanguages, backendLanguages } from "../constants";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
          mt: { xs: 4, sm: 11 },
        }}
        gap={1}
      >
        <Grid xs={12} sx={{ p: 2 }}>
          <Accordion sx={{ backgroundColor: "#2c2c6c" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Heading
                sx={{
                  color: "#4db5ff",
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
                  <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
                    {frontendLanguages.map((frontendData) => (
                      <Grid
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
                        <CheckCircleIcon sx={{ color: "#4db5ff", mr: 1.5 }} />
                        <Grid>
                          <Link href={frontendData.path} underline="none">
                            <Heading
                              sx={{
                                fontSize: { xs: ".8rem", sm: "1.2rem" },
                                fontWeight: "700",
                              }}
                            >
                              {frontendData.name}
                            </Heading>
                          </Link>

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
        <Grid xs={12} sx={{ p: 2 }}>
          <Accordion sx={{ backgroundColor: "#2c2c6c" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Heading
                sx={{
                  color: "#4db5ff",
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
                  <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
                    {backendLanguages.map((backend) => (
                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "baseline",
                          mb: 2,
                        }}
                        xs={6}
                        sm={4}
                        md={3}
                      >
                        <CheckCircleIcon sx={{ color: "#4db5ff", mr: 1.5 }} />
                        <Grid>
                          <Link href={backend.path} underline="none">
                            <Heading
                              sx={{
                                fontSize: { xs: ".8rem", sm: "1.2rem" },
                                fontWeight: "700",
                              }}
                            >
                              {backend.name}
                            </Heading>
                          </Link>
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
