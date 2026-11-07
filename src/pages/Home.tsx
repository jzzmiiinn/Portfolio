import { Link } from "react-router-dom";
import { Mail, Sparkles, ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export const Home = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-10 left-0 w-48 h-48 bg-sky-50 rounded-full blur-3xl opacity-70" />

      <div className="relative max-w-5xl w-full mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-800 px-4 py-2 text-sm font-medium mb-8">
            <Sparkles size={16} />
            Hello, I'm
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-blue-950 mb-6">
            Yasmin Ali
            <span className="block text-sky-600">Aime.</span>
          </h1>

          {/* Role */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            Frontend Developer <span className="text-sky-600">&</span>{" "}
            Fourth-Year Software Engineering Student
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-10">
            I build responsive, user-focused web applications with modern
            frontend technologies. I'm passionate about creating meaningful
            digital experiences and continuously growing toward becoming a
            full-stack developer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-blue-950 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300"
            >
              View My Projects
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="border border-blue-950 text-blue-950 px-6 py-3 rounded-lg font-medium hover:bg-blue-950 hover:text-white transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 font-medium">
              Find me on
            </span>

            <a
              href="https://github.com/jzzmiiinn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-blue-50 text-blue-950 hover:bg-blue-100 transition-colors"
            >
              <SiGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/yasmin-ali-2b0a1b1b6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-50 text-blue-950 font-bold hover:bg-blue-100 transition-colors"
            >
              in
            </a>

            <a
              href="mailto:jzzmiiinnali@gmail.com"
              aria-label="Email"
              className="p-3 rounded-full bg-blue-50 text-blue-950 hover:bg-blue-100 transition-colors"
            >
              <Mail size={21} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
