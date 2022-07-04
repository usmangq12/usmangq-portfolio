import { createTheme } from "@mui/material";
const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#2c2c6c",
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
// [theme.breakpoints.down("md")]: {
//   margin: "10px auto 70px",
// },

export default theme;
