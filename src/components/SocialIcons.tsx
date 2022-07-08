import { Grid, Link } from "@mui/material";
import { links } from "../constants";
export const SocialIcons = ({
  styles,
}: {
  styles: { background: string; color: string };
}) => {
  return (
    <Grid sx={{ display: "flex" }} gap={2}>
      {links.map(({ href, icon: Icon }) => (
        <Link href={href} sx={{ color: "#1f1f38" }}>
          <Icon
            sx={{
              border: "1px solid",
              fontSize: "25px",
              borderRadius: "50%",

              background: `${
                styles.background ? styles.background : "#1f1f38"
              }`,
              p: "8px",
              "&:hover": {
                transform: "scale(1.2)",
                transition: "all 0.5s ease",
                backgroundColor: "#1f1f38",
                color: "#fff",
              },
            }}
          />
        </Link>
      ))}
    </Grid>
  );
};
