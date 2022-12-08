import React from "react";
import { CardMedia, styled } from "@mui/material";

const Img: any = styled(CardMedia)(({ theme }) => ({
  maxWidth: "100%",
}));

export const Image = ({ ...props }) => {
  return <Img component="img" {...props} />;
};
