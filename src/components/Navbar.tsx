import React from "react";
import { Box,AppBar, IconButton, Toolbar, Typography, Button, Grid, Container } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";



const navItems = [
  "HOME",
  "ABOUT",
  "SERVICE",
  "PORTFOLIO",
  "TESTIMONIALS",
  "CONTACT US",
];

export const Navbar = () => {
  return (
    <Box>
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "#1f1f38" ,p:2}}>
          <Container sx={{
             display: "flex"}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              DevNode
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{color: "#fff", fontWeight: "700" ,fontSize:'15px'}}>
                  {item}
                </Button>
              ))}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
