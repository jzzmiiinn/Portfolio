import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export const Footer = () => {
  return (
    <footer className="p-4 flex flex-col gap-6 bg-blue-950 text-white">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1>Yasmin's Portfolio</h1>
          <p>Frontend Developer & Software Engineering Student</p>
        </div>
        <nav className="flex gap-4">
          <a href="mailto:jzzmiiinnali@gmail.com">
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yasmin-ali-2b0a1b1b6/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://github.com/jzzmiiinn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub size={24} />
          </a>
        </nav>
      </div>
      <hr />
      <div className="flex flex-row justify-between items-center">
        <p>&copy; 2026 Yasmin's Portfolio. All rights reserved.</p>
        <p>Jimma University • Addis Ababa, Ethiopia</p>
      </div>
    </footer>
  );
};
