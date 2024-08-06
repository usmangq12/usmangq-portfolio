import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { Heading } from "../shared";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SkillsArray = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", path: "https://www.javascript.com/" },
      { name: "TypeScript", path: "https://www.typescriptlang.org/" },
      {
        name: "HTML",
        path: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "CSS", path: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Java", path: "https://www.java.com/" },
    ],
  },
  {
    title: "Technologies and Frameworks",
    skills: [
      { name: "React", path: "https://reactjs.org/" },
      { name: "React Native", path: "https://reactnative.dev/" },
      { name: "Redux", path: "https://redux.js.org/" },
      { name: "Zustand", path: "https://zustand-demo.pmnd.rs/" },
      { name: "Next.js", path: "https://nextjs.org/" },
      { name: "Angular", path: "https://angular.io/" },
      { name: "Vue", path: "https://vuejs.org/" },
      { name: "D3.js", path: "https://d3js.org/" },
      { name: "PowerBI", path: "https://powerbi.microsoft.com/" },
      { name: "Tailwind", path: "https://tailwindcss.com/" },
      { name: "Chakra-UI", path: "https://chakra-ui.com/" },
      { name: "Express", path: "https://expressjs.com/" },
      { name: "near-api-js", path: "https://docs.near.org/tools/near-api-js" },
      { name: "Google Maps API", path: "https://developers.google.com/maps" },
      {
        name: "JAWS",
        path: "https://www.freedomscientific.com/products/software/jaws/",
      },
      { name: "NVDA", path: "https://www.nvaccess.org/" },
      {
        name: "Voiceover",
        path: "https://www.apple.com/voiceover/info/guide/_1121.html",
      },
      {
        name: "Narrator",
        path: "https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-78d9f9e8-df0b-4ea4-85a4-7bf3a7e3c618",
      },
      { name: "ZoomText", path: "https://www.zoomtext.com/" },
      {
        name: "Accessibility Insights",
        path: "https://accessibilityinsights.io/",
      },
      { name: "AXE", path: "https://www.deque.com/axe/" },
      {
        name: "WAT",
        path: "https://accessibility.oit.ncsu.edu/it-accessibility-at-nc-state/developers/accessibility-handbook/tools/wat/",
      },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", path: "https://aws.amazon.com/" },
      { name: "Firebase", path: "https://firebase.google.com/" },
    ],
  },
  {
    title: "DBMS",
    skills: [
      { name: "SQL", path: "https://www.w3schools.com/sql/" },
      { name: "PostgreSQL", path: "https://www.postgresql.org/" },
      { name: "MongoDB", path: "https://www.mongodb.com/" },
    ],
  },
  {
    title: "IDEs and Tools",
    skills: [
      { name: "Git", path: "https://git-scm.com/" },
      { name: "NEAR", path: "https://near.org/" },
      { name: "Twilio", path: "https://www.twilio.com/" },
      { name: "Stripe", path: "https://stripe.com/" },
    ],
  },
  // {
  //   title: "Other Skills",
  //   skills: [
  //     { name: "OO and Functional Programming", path: "#" },
  //     { name: "CI/CD", path: "#" },
  //     { name: "TDD", path: "#" },
  //     { name: "Design Patterns", path: "#" },
  //     { name: "Agile Development", path: "#" },
  //     { name: "Clean Architecture", path: "#" },
  //     { name: "Unit and Integration Testing", path: "#" },
  //     { name: "AWS Serverless Services Visualizations", path: "#" },
  //     { name: "Research & Development", path: "#" },
  //     {
  //       name: "WCAG 2.1",
  //       path: "https://www.w3.org/WAI/standards-guidelines/wcag/",
  //     },
  //   ],
  // },
  {
    title: "Development methodologies",
    skills: [
      { name: "OO and Functional Programming", path: "#" },
      { name: "CI/CD", path: "#" },
      { name: "TDD", path: "#" },
      { name: "Design Patterns", path: "#" },
      { name: "Agile Development", path: "#" },
      { name: "Clean Architecture", path: "#" },
      { name: "Unit and Integration Testing", path: "#" },
      { name: "AWS Serverless Services Visualizations", path: "#" },
      { name: "Research & Development", path: "#" },
      {
        name: "WCAG 2.1",
        path: "https://www.w3.org/WAI/standards-guidelines/wcag/",
      },
    ],
  },
];

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
        {SkillsArray.map((skillDetail, index) => {
          return (
            <Grid item xs={12} sx={{ p: 2 }}>
              <Accordion sx={{ backgroundColor: "#112240" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "info.light" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Heading
                    sx={{
                      color: "info.light",
                      fontSize: { xs: "1rem", md: "1.75rem",  },

                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    {skillDetail.title}
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
                        {skillDetail.skills.map((frontendData, index) => (
                          <Grid
                            key={index}
                            item
                            sx={{
                              display: "flex",
                              alignItems: "baseline",
                              flexWrap: "nowrap",
                              mb: 2,
                            }}
                            xs={6}
                            sm={4}
                            md={3}
                          >
                            <CheckCircleIcon
                              sx={{ color: "info.light", mr: 1.5 }}
                            />
                            <Grid item>
                              <Heading
                                sx={{
                                  fontSize: { xs: ".8rem", sm: "1.2rem" },
                                  fontWeight: "700",
                                  color: "info.light",
                                }}
                              >
                                {frontendData.name}
                              </Heading>

                              <Heading
                                sx={{
                                  fontSize: ".8rem",
                                  fontWeight: "300",
                                  color: "info.main",
                                }}
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
          );
        })}
      </Grid>
    </Grid>
  );
};
