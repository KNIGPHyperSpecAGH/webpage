import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const SocialsFull = () => (
  <div className="flex flex-col items-start space-y-4">
    <a
      href="https://www.facebook.com/profile.php?id=61577291008686"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="group flex items-center space-x-2"
      style={{ fontSize: "2rem" }}
    >
      <FacebookIcon
        sx={{
          fontSize: "inherit",
          color: "var(--color-white)",
          transition: "color 0.2s",
          ".group:hover &": { color: "var(--color-accent)" },
        }}
      />
      <span className="text-white text-lg group-hover:text-[var(--color-accent)] transition-colors">
        KNIGP HyperSpec AGH
      </span>
    </a>

    <a
      href="https://www.instagram.com/knigp_hyperspec/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="group flex items-center space-x-2"
      style={{ fontSize: "2rem" }}
    >
      <InstagramIcon
        sx={{
          fontSize: "inherit",
          color: "var(--color-white)",
          transition: "color 0.2s",
          ".group:hover &": { color: "var(--color-accent)" },
        }}
      />
      <span className="text-white text-lg group-hover:text-[var(--color-accent)] transition-colors">
        @knigp_hyperspec
      </span>
    </a>

    <a
      href="https://www.linkedin.com/company/hyperspec"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="group flex items-center space-x-2"
      style={{ fontSize: "2rem" }}
    >
      <LinkedInIcon
        sx={{
          fontSize: "inherit",
          color: "var(--color-white)",
          transition: "color 0.2s",
          ".group:hover &": { color: "var(--color-accent)" },
        }}
      />
      <span className="text-white text-lg group-hover:text-[var(--color-accent)] transition-colors">
    HyperSpec
      </span>
    </a>
  </div>
);
export default SocialsFull;