import { motion } from "framer-motion";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { MdMail as Mail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Prakhar
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Passionate web developer and entrepreneur dedicated to creating
              innovative digital solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, color: "#3B82F6" }}
                href="https://github.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: "#3B82F6" }}
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: "#3B82F6" }}
                href="mailto:hello@example.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Web Development</span>
              </li>
              <li>
                <span className="text-gray-400">Event Management</span>
              </li>
              <li>
                <span className="text-gray-400">Consulting</span>
              </li>
              <li>
                <span className="text-gray-400">Startup Advice</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Portfolio. All rights reserved. Built with React, TypeScript
            & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
