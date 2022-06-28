import { Grid, Card, Button, CardContent } from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import { Heading } from "../shared";
const contact = [
  { name: "Email", contactDetail: "ahmadzulfiqar142@gamil.com" },
  { name: "Whatsapp", contactDetail: "03007310142" },
  { name: "Email", contactDetail: "03007310142" },
];
export const Contact = () => {
  return (
    <Grid container direction={"column"}>
      <Heading
        sx={{
          display: "block",
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
        Get In Touch
      </Heading>
      <Heading
        sx={{
          display: "block",
          color: "#4db5ff",
          textAlign: "center",
          fontSize: "1.7rem",
          fontWeight: "700",
        }}
        variant="h3"
      >
        Contact
      </Heading>
      <Grid sx={{ display: "flex" }}>
        <Grid
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            xs={7}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            gap={4}
          >
            {contact.map((contactInfo) => (
              <Card sx={{ borderRadius: "2rem", p: 4 }}>
                <CardContent>
                  <Grid>
                    <Heading sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
                      {contactInfo.name}
                    </Heading>

                    <Heading sx={{ fontSize: ".8rem", fontWeight: "700" }}>
                      {contactInfo.contactDetail}
                    </Heading>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
        <Grid xs={6}>ffffff</Grid>
      </Grid>
    </Grid>
  );
};
