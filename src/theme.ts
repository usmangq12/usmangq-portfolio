import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#0a182e",
    },
    secondary: {
      main: "#4db5ff",
    },
    info: {
      main: "#FFFFFF",
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
          backgroundColor: "#4DB5FF",
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
            margin: "15px auto 100px",
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
          "&.Mui-focused": {
            border: "1px solid #fff",
          },
        },
      },
    },
  },
});

export default theme;
