import { Grid, Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SvgIconComponent } from "@mui/icons-material";

const links: { href: string; icon: SvgIconComponent }[] = [
  { href: "https://twitter.com/Muhamma28090557", icon: TwitterIcon },
  { href: "https://github.com/usmangq12", icon: GitHubIcon },
  {
    href: "https://instagram.com/uxmangq?igshid=YmMyMTA2M2Y=",
    icon: InstagramIcon,
  },
  {
    href: "https://www.linkedin.com/in/muhammad-usman-759b55129",
    icon: LinkedInIcon,
  },
];

export const SocialIcons = ({
  styles,
}: {
  styles: { background: string; color: string };
}) => {
  return (
    <Grid sx={{ display: "flex", justifyContent: "space-between" }} gap={2}>
      {links.map(({ href, icon: Icon }, index) => (
        <Link key={index} href={href} target="_blank" sx={{ color: "#0a192f" }}>
          <Icon
            sx={{
              border: "1px solid",
              fontSize: "40px",
              borderRadius: "50%",

              background: `${
                styles.background ? styles.background : "#0a192f"
              }`,
              p: "8px",
              "&:hover": {
                transform: "scale(1.2)",
                transition: "all 0.5s ease",
                backgroundColor: "#0a192f",
                color: "#fff",
              },
            }}
          />
        </Link>
      ))}
    </Grid>
  );
};
