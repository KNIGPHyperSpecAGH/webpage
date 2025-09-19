import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Socials = () => (
  <div className="flex justify-center space-x-3">
    <a
      href="https://www.facebook.com/profile.php?id=61577291008686"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="group flex items-center justify-center"
      style={{ fontSize: "3rem" }}
    >
      <FacebookIcon
        sx={{
          fontSize: "inherit",
          color: "var(--color-white)",
          transition: "color 0.2s",
          ".group:hover &": { color: "var(--color-accent)" },
        }}
        className="transition-colors"
      />
    </a>
    <a
      href="https://www.instagram.com/knigp_hyperspec/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="group flex items-center justify-center"
      style={{ fontSize: "3rem" }}
    >
      <InstagramIcon
        sx={{
          fontSize: "inherit",
          color: "var(--color-white)",
          transition: "color 0.2s",
          ".group:hover &": { color: "var(--color-accent)" },
        }}
        className="transition-colors"
      />
    </a>
        <a
      href="https://www.linkedin.com/company/hyperspec"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="group flex items-center justify-center"
      style={{ fontSize: "3rem" }}
    >
      <LinkedInIcon
        sx={{
          fontSize: "inherit",
          color: "var(--color-white)",
          transition: "color 0.2s",
          ".group:hover &": { color: "var(--color-accent)" },
        }}
        className="transition-colors"
      />
    </a>
    <a
      href="https://github.com/KNIGPHyperSpecAGH/webpage"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="group flex items-center justify-center"
      style={{ fontSize: "3rem" }}
    >
      <GitHubIcon
        sx={{
          fontSize: "inherit",
          color: "var(--color-white)",
          transition: "color 0.2s",
          ".group:hover &": { color: "var(--color-accent)" },
        }}
        className="transition-colors"
      />
    </a>
  </div>
);
