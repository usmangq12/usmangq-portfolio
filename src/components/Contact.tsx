import {
  Grid,
  Card,
  Button,
  CardContent,
  TextField,
  TextareaAutosize,
  Link,
} from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Heading } from "../shared";
import { contactsMethod } from "../constants";

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
      <Grid sx={{ display: "flex", mt: 12, flexWrap: "wrap" }}>
        <Grid
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            xs={12}
            sm={11}
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            gap={4}
          >
            {contactsMethod.map((contactInfo) => (
              <Card
                sx={{
                  borderRadius: "1.5rem",
                  p: 2.5,
                }}
              >
                <CardContent>
                  <Grid sx={{ textAlign: "center" }}>
                    <Heading
                      sx={{ fontSize: "1.2rem", fontWeight: "700", mb: 1.5 }}
                    >
                      {contactInfo.name}
                    </Heading>
                    <Heading
                      sx={{ fontSize: ".8rem", fontWeight: "700", mb: 1.5 }}
                    >
                      {contactInfo.contactDetail}
                    </Heading>
                    <Link
                      href={contactInfo.path}
                      underline="none"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "#4db5ff",
                      }}
                    >
                      Send Message
                      <CallMadeIcon sx={{ ml: "2px" }} />
                    </Link>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            xs={12}
            sm={11}
            md={9}
            gap={3}
            sx={{ display: "flex", flexDirection: "column", pt: 3.5 }}
          >
            <TextField
              sx={{
                borderColor: "#4db5ff",
                color: "#fff",

                borderRadius: 2,
              }}
              placeholder="Your Full Name"
            />
            <TextField
              sx={{
                borderColor: "#4db5ff",
                color: "#fff",
                borderRadius: 2,
              }}
              placeholder="Your Email"
            />
            <TextareaAutosize
              cols={30}
              minRows={10}
              placeholder="Your Message"
              style={{
                // width: 470,
                borderRadius: "15px",
                backgroundColor: "#1f1f38",
                color: "#fff",
                border: "1px solid #4db5ff",
                resize: "none",
                padding: "16px",
              }}
            />
            <Button
              variant="contained"
              sx={{
                background: "#4db5ff",
                borderRadius: "10px",
                width: "200px",
                padding: "12px",
              }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
