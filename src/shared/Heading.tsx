import { Typography, styled } from "@mui/material";

const StyledTypography: any = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: " 20px",
  fontWeight: 400,
}));

export const Heading = ({ children, ...props }: any) => {
  return <StyledTypography {...props}> {children} </StyledTypography>;
};
