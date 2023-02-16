import { Grid, Box, Typography, Tabs, Tab, Link } from "@mui/material";
import { Heading } from "../shared";
import { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

type IExperiences = {
  company: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

const companies: string[] = ["AntiSocial Labs", "Share Mobility", "Curiato"];

const experiences: IExperiences[] = [
  {
    company: "AntiSocial Labs",
    startDate: "September 2020",
    endDate: "Present",
    achievements: [
      "Created antisocialapeclub where users can join the club to sell or buy NFTs.",
      "Created a school system where students can pay their tuition fee by NEAR account balance and get certified when the course ends.",
      "Created OmniDAO to show their services and the NFT Suite.",
    ],
  },
  {
    company: "Share Mobility",
    startDate: "July 2019",
    endDate: "August 2020",
    achievements: [
      "Helped craft the driving module for Ride-Hailing.",
      "Created booking rides, rate-ride, referral-reward.",
      "Built optimized routes system for admin panel using Google Maps API.",
      "Created auto-response back system based on AI using Twilio.",
    ],
  },
  {
    company: "Curiato",
    startDate: "October 2017",
    endDate: "June 2019",
    achievements: [
      "Developed highly customized charts using D3 to visualize the clinical conditions of the patient.",
      "Created interactive visuals on PowerBI to express different clinical metrics.",
    ],
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component="span" color="info.main">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Experience = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container id={"EXPERIENCES"}>
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          mb: { xs: 4, sm: 12.5 },
        }}
      >
        <Heading
          sx={{
            display: "block",
            color: "secondary.main",
            textAlign: "center",
            fontSize: "1.7rem",
            fontWeight: "700",
          }}
          variant="h3"
        >
          Where I've Worked
        </Heading>
      </Grid>

      <Grid
        item
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          width: "100%",
          height: { xs: "unset", sm: "290px" },
        }}
      >
        <Grid xs={12} sm={2} item>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="experience tabs"
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              "& .Mui-selected": {
                borderLeft: "4px solid  #4db5ff",
                color: "#4db5ff !important",
                [theme.breakpoints.down("sm")]: {
                  borderLeft: "0",
                  borderBottom: "4px solid #4db5ff ",
                },
              },
            })}
          >
            {companies.map((companyLabel, index) => (
              <Tab
                key={index}
                sx={(theme) => ({
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "start",
                  alignItems: "flex-start",
                  color: "info.light",
                  fontWeight: "700",
                  borderLeft: "4px solid rgba(255, 255, 255, 0.5)",
                  [theme.breakpoints.down("sm")]: {
                    borderLeft: "0",
                    fontWeight: "400",
                    fontSize: "10px",
                  },
                })}
                label={companyLabel}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Grid>
        <Grid ml={{ xs: 0, sm: 6 }} xs={12} sm={10} item>
          {experiences.map(
            ({ company, startDate, endDate, achievements }, index) => (
              <TabPanel value={value} index={index} key={index}>
                <Heading
                  mb={2}
                  sx={(theme: any) => ({
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "info.light",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "20px",
                      mt: 2,
                    },
                  })}
                >
                  Engineer&nbsp;
                  <Link
                    underline="none"
                    target="_blank"
                    href="https://docs.antisociallabs.io/"
                    sx={{
                      flexDirection: "column",
                      color: "secondary.main",
                      fontWeight: "400",
                      fontSize: { sm: "33px", md: "23px" },
                      textAlign: "center",
                    }}
                  >
                    @ {company}.
                  </Link>
                </Heading>
                <Heading mb={2}>
                  {startDate} - {endDate}
                </Heading>
                {achievements.map((item, i) => (
                  <Grid key={i} item sx={{ display: "flex" }}>
                    <ArrowRightIcon
                      sx={{ fontSize: "30px", color: "secondary.main" }}
                    />
                    <Heading mb={2}>{item}</Heading>
                  </Grid>
                ))}
              </TabPanel>
            )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
