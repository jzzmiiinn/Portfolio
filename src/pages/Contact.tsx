import { Mail, Phone, MapPin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10 text-blue-950">CONTACT ME</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Contact Information</h2>

          <ul className="space-y-4">
            <li>
              <Phone size={20} className="inline-block mr-2 text-blue-950" />
              Phone: <a href="tel:+251961970874">+251961970874</a>
            </li>
            <li>
              <Mail size={20} className="inline-block mr-2 text-blue-950" />
              Email:{" "}
              <a href="mailto:jzzmiiinnali@gmail.com">jzzmiiinnali@gmail.com</a>
            </li>
            <li>
              <SiGithub size={24} className="inline-block mr-2 text-blue-950" />
              GitHub:{" "}
              <a
                href="https://github.com/jzzmiiinn"
                target="_blank"
                rel="noopener noreferrer"
              >
                jzzmiiinn
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/yasmin-ali-2b0a1b1b6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yasmin Ali
              </a>
            </li>
            <li>
              <MapPin size={20} className="inline-block mr-2 text-blue-950" />{" "}
              Address: Addis Ababa, Ethiopia
            </li>
          </ul>
        </div>

        <form className="space-y-5">
          <h2 className="text-xl font-semibold">Send Me A Message</h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="fname">First Name</label>
              <input
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="fname"
                name="fname"
                type="text"
                placeholder="Enter your first name..."
                autoComplete="given-name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lname">Last Name</label>
              <input
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="lname"
                name="lname"
                type="text"
                placeholder="Enter your last name..."
                autoComplete="family-name"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email..."
              autoComplete="email"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject">Subject</label>
            <input
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter your subject..."
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 min-h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="message"
              name="message"
              placeholder="Enter your message..."
              required
            />
          </div>

          <button
            className="bg-blue-950 text-white font-medium px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors hover:cursor-pointer"
            type="submit"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};
