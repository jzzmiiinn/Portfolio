import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-6 py-8 md:px-10">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold mb-2">Yasmin's Portfolio</h1>
            <p className="text-blue-100 text-sm">
              Frontend Developer & Software Engineering Student
            </p>
          </div>

          {/* Social Links */}
          <nav className="flex items-center gap-4" aria-label="Social links">
            <a
              href="mailto:jzzmiiinnali@gmail.com"
              aria-label="Email"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Mail size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/yasmin-ali-2b0a1b1b6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 font-bold transition-colors"
            >
              in
            </a>

            <a
              href="https://github.com/jzzmiiinn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <SiGithub size={20} />
            </a>
          </nav>
        </div>

        <hr className="border-blue-800" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left text-sm text-blue-100">
          <p>&copy; 2026 Yasmin's Portfolio. All rights reserved.</p>

          <p>Jimma University &bull; Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </footer>
  );
};
