import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="min-h-[80vh] flex items-center px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg font-medium text-purple-600 mb-3">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Yasmin Ali Aime</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Frontend Developer & Fourth-Year Software Engineering Student
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          I build responsive, user-focused web applications with modern frontend
          technologies and I'm continuously growing toward becoming a full-stack
          developer.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="bg-blue-950 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            View My Projects
          </Link>

          <Link
            to="/contact"
            className="border border-blue-950 text-blue-950 px-6 py-3 rounded-lg font-medium hover:bg-blue-950 hover:text-white transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};
