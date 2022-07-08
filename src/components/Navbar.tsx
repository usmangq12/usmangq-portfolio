import {
  AppBar,
  IconButton,
  Toolbar,
  Grid,
  Container,
  Divider,
  Link,
  Drawer,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import { Heading } from "../shared";
import { navItems } from "../constants";
import { useState } from "react";
interface Props {
  window?: () => Window;
}
const drawerWidth = 240;
export const Navbar = (props: Props) => {
  const { window } = props;
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };
  const drawerData = (
    <Grid onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Heading sx={{ my: 2, fontWeight: "700", fontSize: "23px" }}>
        Usman-gq
      </Heading>
      <Divider />
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        gap={4}
      >
        {navItems.map((item: string) => (
          <Link
            underline="none"
            href={`#${item}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "700",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            {item}
          </Link>
        ))}
      </Grid>
    </Grid>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Grid>
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "#1f1f38", p: 2 }}>
          <Container
            sx={{
              display: "flex",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Grid
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
              }}
              gap={3}
            >
              <Heading
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  fontWeight: "700",
                  fontSize: "2.5rem",
                }}
              >
                Usman-gq
              </Heading>
              <Grid sx={{ display: { xs: "none", sm: "block" } }} gap={2}>
                <Grid
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                  // gap={3}
                >
                  {navItems.map((item) => (
                    <Link
                      href={`#${item}`}
                      underline="none"
                      sx={{
                        color: "#fff",
                        fontWeight: "800",
                        fontSize: { sm: "10px", md: ".8rem" },
                        p: 1,
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>

      <Grid component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={openDrawer}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerData}
        </Drawer>
      </Grid>
    </Grid>
  );
};
