import { Grid, Box, Typography, Tabs, Tab, Link } from "@mui/material";
import { Heading } from "../shared";
import { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { scoutContent, ShareMobilityContent, staryContent } from "../constants";

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
          <Typography color="info.main">{children}</Typography>
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

export const Work = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid
        id={"WORK"}
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
        }}
      >
        <Grid xs={12} sm={2} item>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
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
            <Tab
              sx={(theme) => ({
                color: "info.main",
                fontWeight: "700",
                borderLeft: "4px solid rgba(255, 255, 255, 0.5)",
                [theme.breakpoints.down("sm")]: {
                  borderLeft: "0",
                },
              })}
              label="Share Mobility"
              {...a11yProps(0)}
            />
            <Tab
              sx={(theme) => ({
                color: "info.main",
                fontWeight: "700",
                borderLeft: "4px solid rgba(255, 255, 255, 0.5)",
                [theme.breakpoints.down("sm")]: {
                  borderLeft: "0",
                },
              })}
              label="Scout"
              {...a11yProps(1)}
            />
            <Tab
              sx={(theme) => ({
                color: "info.main",
                fontWeight: "700",
                borderLeft: "4px solid rgba(255, 255, 255, 0.5)",
                [theme.breakpoints.down("sm")]: {
                  borderLeft: "0",
                },
              })}
              label="Stary"
              {...a11yProps(2)}
            />
          </Tabs>
        </Grid>
        <Grid ml={{ xs: 0, sm: 6 }} xs={12} sm={10} item>
          <TabPanel value={value} index={0}>
            <Heading mb={2} sx={{ fontSize: "30px", fontWeight: "700" }}>
              Enginer&nbsp;
              <Link
                underline="none"
                target="_blank"
                href="https://www.sharemobility.com/"
                sx={{
                  flexDirection: "column",
                  color: "secondary.main",
                  fontWeight: "400",
                  fontSize: { sm: "33px", md: "23px" },
                  textAlign: "center",
                }}
              >
                @ Share-Mobility.
              </Link>
            </Heading>
            <Heading mb={2}>Nov 2022 - Present</Heading>
            {ShareMobilityContent.map((item, index) => (
              <Grid key={index} item sx={{ display: "flex" }}>
                <ArrowRightIcon
                  sx={{ fontSize: "30px", color: "secondary.main" }}
                />
                <Heading mb={2}>{item}</Heading>
              </Grid>
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Heading mb={2} sx={{ fontSize: "30px", fontWeight: "700" }}>
              Enginer&nbsp;
              <Link
                underline="none"
                target="_blank"
                href="https://www.sharemobility.com/"
                sx={{
                  flexDirection: "column",
                  color: "secondary.main",
                  fontWeight: "400",
                  fontSize: { sm: "33px", md: "23px" },
                  textAlign: "center",
                }}
              >
                @ Scout
              </Link>
            </Heading>
            <Heading mb={2}>Nov 2022 - Present</Heading>
            {scoutContent.map((item, index) => (
              <Grid key={index} item sx={{ display: "flex" }}>
                <ArrowRightIcon
                  sx={{ fontSize: "30px", color: "secondary.main" }}
                />
                <Heading mb={2}>{item}</Heading>
              </Grid>
            ))}
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Heading mb={2} sx={{ fontSize: "30px", fontWeight: "700" }}>
              Enginer&nbsp;
              <Link
                underline="none"
                target="_blank"
                href="https://www.sharemobility.com/"
                sx={{
                  flexDirection: "column",
                  color: "secondary.main",
                  fontWeight: "400",
                  fontSize: { sm: "33px", md: "23px" },
                  textAlign: "center",
                }}
              >
                @ Stary
              </Link>
            </Heading>
            <Heading mb={2}>Nov 2022 - Present</Heading>
            {staryContent.map((item, index) => (
              <Grid key={index} item sx={{ display: "flex" }}>
                <ArrowRightIcon
                  sx={{ fontSize: "30px", color: "secondary.main" }}
                />
                <Heading mb={2}>{item}</Heading>
              </Grid>
            ))}
          </TabPanel>
        </Grid>
      </Grid>
    </Grid>
  );
};
