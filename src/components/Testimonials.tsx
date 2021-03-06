import { Grid, Card, CardContent, Avatar } from "@mui/material";
import { Heading, Image } from "../shared";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsItem } from "../constants";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export const Testimonials = () => {
  return (
    <Grid container direction={"column"} id="TESTIMONIALS">
      <Heading
        sx={{
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
        Reviews From Clients
      </Heading>
      <Heading
        sx={{
          color: "#4db5ff",
          textAlign: "center",
          fontSize: "1.7rem",
          fontWeight: "700",
        }}
        variant="h3"
      >
        Testimonials
      </Heading>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonialsItem.map((imges) => (
          <SwiperSlide>
            <Card sx={{ borderRadius: "1rem", p: 4, mt: 12 }}>
              <Avatar
                sx={{ backgroundColor: "#4db5ff", p: 0.7, mx: "auto" }}
                aria-label="recipe"
              >
                <Image sx={{ borderRadius: "2rem" }} src={imges.img}></Image>
              </Avatar>
              <CardContent>
                <Heading
                  sx={{
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  A
                </Heading>
                <Heading sx={{ fontSize: ".8rem", fontWeight: "300", mt: 0.5 }}>
                  Lorem ipsum dolor sit amet, id lacus consectetur adipiscing
                  elit. Vivamus egestas, luctus eni
                </Heading>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};
