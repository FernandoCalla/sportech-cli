import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Tooltip } from '@mui/material';

function Footer() {
  return (
    <footer className="z-20 mt-5 grid grid-rows-3 items-center justify-items-center gap-2 rounded-t-3xl bg-white p-4 shadow-md sm:grid-cols-3 sm:grid-rows-1 md:mt-10">
      <img src={"src/assets/logo.png"} alt="logo" className="h-full cursor-pointer" 
          width="100"
          height="100" />
      <div>SporTech © {new Date().getFullYear()}</div>
      <div className="flex gap-6">
        <Tooltip title="Frontend Repository">
          <a
            href="https://github.com/FernandoCalla/sportech-cli"
            target="_blank"
            aria-label="Github"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="text-3xl" />
          </a>
        </Tooltip>
        <Tooltip title="Backend Repository">
          <a href="https://github.com/FernandoCalla/sportech-api" aria-label="Github">
            <GitHubIcon className="text-3xl" />
          </a>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <a href="https://www.linkedin.com/in/fernando-rafael-calla-yarihuaman-6405bb18b/" aria-label="LinkedIn">
            <LinkedInIcon className="text-3xl" />
          </a>
        </Tooltip>
      </div>
    </footer>
  )
}

export default Footer
