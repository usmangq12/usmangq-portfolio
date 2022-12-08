import { createTheme } from "@mui/material";
const defaultTheme = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: "#0a182e",
    },
    secondary: {
      main: "#4db5ff",
    },
    info: {
      light: "#ccd6f6",
      main: "#a8b2d1",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: "0 !important",
          background: "rgba(10, 25, 47, 1)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#112240",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          "&.MuiGrid-container": {
            margin: "15px auto 120px",
            [defaultTheme.breakpoints.down("sm")]: {
              margin: "40px auto 70px",
            },
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          "& .MuiCardHeader-title": {
            fontSize: "1rem",
            fontWeight: "900",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          "& .MuiDrawer-paper": {
            background: "rgba(10, 25, 47, 1)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "1px solid #4db5ff",
          color: "#fff",
          borderRadius: "15px",
          height: "50px",
          "& .Mui-focused": {
            border: "1px solid #fff",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-flexContainer": {
            display: "flex",
            flexDirection: "column",
            [defaultTheme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            },
          },
        },
      },
    },
  },
});

export default theme;
