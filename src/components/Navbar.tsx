import {
  AppBar,
  IconButton,
  Toolbar,
  Grid,
  Container,
  Drawer,
  Box,
  Divider,
  Typography,
  Link,
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DevNode
      </Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        gap={4}
      >
        {navItems.map((item) => (
          <Link
            href={`#${item.name}`}
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
            {item.name}
          </Link>
        ))}
      </Box>
    </Box>
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
            <Heading sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              DevNode
            </Heading>
            <Grid>
              <Grid sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Link
                    href={`#${item.name}`}
                    underline="none"
                    sx={{
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: "15px",
                      m: 1,
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
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
          {drawer}
        </Drawer>
      </Box>
    </Grid>
  );
};
