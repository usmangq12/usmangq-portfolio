import { Grid, Box, Typography, Tabs, Tab, Link } from "@mui/material";
import { Heading } from "../shared";
import { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

type IExperiences = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

const companies: string[] = [
  "Akvelon",
  "AntiSocial Labs",
  "Share Mobility",
  "Curiato",
];

const experiences: IExperiences[] = [
  {
    company: "Akevlon",
    title: "Software Engineer",
    startDate: "October 2023",
    endDate: "Running",
    achievements: [
      "Working as a Software Engineer",
      "Successfully implemented a solution for screen reader compatibility in Power BI's filter pane, enabling visually impaired users to navigate and apply filters more efficiently.",
      "Collaborated with the QA team to resolve keyboard navigation issues in Power BI reports, ensuring users could access all interactive elements without a mouse.",
      "Enhanced the contrast ratios of visual components, addressing color contrast issues reported by users with visual impairments and adhering to WCAG guidelines.",
      "Fixed tab order inconsistencies in Power BI dashboards, allowing users to navigate through content logically and improving overall accessibility.",
      "Addressed issues with focus indicators in Power BI visuals, ensuring that keyboard users could clearly see which element has focus at any given time.",
      "Improved ARIA (Accessible Rich Internet Applications) labels for Power BI charts, providing better context and descriptions for users relying on assistive technologies.",
      "Implemented fixes for tooltip accessibility, ensuring that all tooltips were readable by screen readers and could be accessed by keyboard users.",
      "Enhanced the accessibility of Power BI's workspace dialog’s search bar accessibility by ensuring searched keyword suggestions are announced by NVDA.",
    ],
  },
  {
    company: "AntiSocial Labs",
    title: "Senior Frontend Developer",
    startDate: "September 2020",
    endDate: "September 2021",
    achievements: [
      "Created antisocialapeclub where users can join the club to sell or buy NFTs.",
      "Created a school system where students can pay their tuition fee by NEAR account balance and get certified when the course ends.",
      "Created OmniDAO to show their services and the NFT Suite.",
      "Created Legaliser which Revolutionizing contract management with AI for efficient, accurate legal documents",
      "Created HitCoach which transform combat sports training through advanced AI and computer vision",
      "Created TimeSeal  As a cost-effective, innovative blockchain timestamping solution, TimeSeal offers unparalleled data protection, accuracy, and transparency.",
      "Relysia Mobile app provides the easiest way to manage the digital assets like as cryptocurrencies etc", //Aug
    ],
  },
  {
    company: "Share Mobility",
    title: "Mid-level Senior Frontend Engineer",
    startDate: "July 2019",
    endDate: "August 2020",
    achievements: [
      "Contributed to the development of the Ride-Hailing platform's driving module, involving the creation of essential functionalities such as booking rides, rating rides, and establishing a referral reward system.",
      "Engineered an advanced routes system for the admin panel by integrating the Google Maps API, optimizing route planning and navigation for enhanced efficiency.",
      "Implemented an intelligent auto-response system powered by AI through Twilio, enabling automated and context-aware interactions to improve user engagement and satisfaction.",
    ],
  },
  {
    company: "Curiato",
    title: "Frontend Developer",
    startDate: "October 2017",
    endDate: "June 2019",
    achievements: [
      "Utilized D3.js to develop meticulously tailored charts that effectively visualize the clinical condition of patients, enabling comprehensive understanding of their health status.",
      "Employed interactive visuals within Power BI to present diverse clinical metrics, enhancing the communication of vital medical information in an engaging and informative manner.",
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

          height: "auto",
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
            ({ company, title, startDate, endDate, achievements }, index) => (
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
                  {title}&nbsp;
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
