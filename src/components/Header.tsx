import { Grid } from "@mui/material";
import { Heading, Image } from "../shared";

export const Header = () => {
  return (
    <Grid container pt={{ xs: 10, sm: 20 }}>
      <Grid
        item
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Grid
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            px: { xs: 2, sm: 0 },
          }}
        >
          <Image
            sx={{ width: { xs: "300px", sm: "auto" } }}
            src="https://preview.colorlib.com/theme/calvin/assets/img/hero/xempolye.png.pagespeed.ic.zBM4C3aZP5.webp"
          />
        </Grid>
        <Grid
          xs={12}
          sm={9}
          sx={{
            pl: { xs: 0, sm: 8 },
            mt: { xs: 3, sm: 0 },
            textAlign: { xs: "center", sm: "start" },
          }}
        >
          <Heading
            sx={{
              color: "#fff",
              fontSize: { sm: "33px", md: "53px" },
              fontWeight: "400",
            }}
            component="div"
            variant="h5"
          >
            My name is Calvin. <br />
            Digital Product Designer
          </Heading>
          <Heading
            sx={{
              color: "#4db5ff",
              fontSize: { xs: "15px", sm: "30px" },
              fontWeight: "400",
              mt: 3,
            }}
            component="div"
            variant="h5"
          >
            Head of design at Calvino
          </Heading>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          mt: { xs: 5, sm: 12 },
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Grid xs={12} sm={4} sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Heading
            sx={{ color: "#4db5ff", fontSize: { xs: "16px", sm: "20px" } }}
          >
            Design For
          </Heading>
          <Heading sx={{ fontSize: { xs: "16px", sm: "26px" } }}>
            Website
          </Heading>
        </Grid>
        <Grid xs={12} sm={4} sx={{ textAlign: "center" }}>
          <Heading
            sx={{ color: "#4db5ff", fontSize: { xs: "16px", sm: "20px" } }}
          >
            Phone
          </Heading>
          <Heading sx={{ fontSize: { xs: "16px", sm: "26px" } }}>
            03007310142
          </Heading>
        </Grid>
        <Grid xs={12} sm={4} sx={{ textAlign: { xs: "center", sm: "right" } }}>
          <Heading
            sx={{ color: "#4db5ff", fontSize: { xs: "16px", sm: "20px" } }}
          >
            Drop your Message
          </Heading>
          <Heading
            sx={{
              textDecoration: "underline",
              fontSize: { xs: "12px", sm: "26px" },
            }}
          >
            ahmadzulfiqar142@gamil.com
          </Heading>
        </Grid>
      </Grid>
    </Grid>
  );
};
