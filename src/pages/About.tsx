export const About = () => {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma"],
    },
    {
      title: "Currently Learning",
      skills: ["Node.js", "Express.js", "MongoDB"],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10 text-blue-950">ABOUT</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-blue-950 mb-6">
            A Little About Me
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm a fourth-year Software Engineering student at Jimma University
            and a Frontend Developer passionate about building responsive,
            accessible, and user-friendly web experiences. I enjoy turning ideas
            and designs into functional applications using React, TypeScript,
            and Tailwind CSS. Through personal projects, collaborative
            experiences, and my internship, I'm continuously improving my skills
            and expanding my knowledge of full-stack development. I'm always
            eager to learn, solve problems, and build meaningful digital
            solutions.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-semibold text-blue-950 mb-8">
            Technical Skills
          </h2>

          <div className="space-y-7">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm font-medium hover:border-blue-950 hover:text-blue-950 hover:shadow-sm transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
