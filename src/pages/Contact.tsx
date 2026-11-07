import { Mail, Phone, MapPin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export const Contact = () => {
  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: "+251961970874",
      href: "tel:+251961970874",
    },
    {
      icon: Mail,
      label: "Email",
      value: "jzzmiiinnali@gmail.com",
      href: "mailto:jzzmiiinnali@gmail.com",
    },
    {
      icon: SiGithub,
      label: "GitHub",
      value: "jzzmiiinn",
      href: "https://github.com/jzzmiiinn",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-2">
          Get in touch
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-950">
          Contact Me
        </h1>
        <p className="text-gray-600 mt-3 max-w-xl">
          Have a project idea, an opportunity, or just want to connect? I'd love
          to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold text-blue-950 mb-6">
            Contact Information
          </h2>

          <div className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-sky-300 hover:shadow-sm transition-all"
                >
                  <div className="p-3 rounded-lg bg-blue-50 text-blue-950">
                    <Icon size={21} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="font-medium text-blue-950 hover:text-sky-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-blue-950">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yasmin-ali-2b0a1b1b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-sky-300 hover:shadow-sm transition-all"
            >
              <div className="p-3 rounded-lg bg-blue-50 text-blue-950 font-bold">
                in
              </div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="font-medium text-blue-950">Yasmin Ali</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-5">
          <div>
            <h2 className="text-xl font-semibold text-blue-950">
              Send Me a Message
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Fill out the form below and let's start a conversation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="fname"
                className="text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="fname"
                name="fname"
                type="text"
                placeholder="First name"
                autoComplete="given-name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="lname"
                className="text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="lname"
                name="lname"
                type="text"
                placeholder="Last name"
                autoComplete="family-name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter your subject"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-950 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
