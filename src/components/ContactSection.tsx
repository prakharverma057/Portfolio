import { useRef, ChangeEvent, useState, FormEvent } from "react";
import { useInView, motion } from "framer-motion";
import { Mail, Linkedin, GitHub } from "react-feather";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  title: string;
  message: string;
}

interface SubmissionState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setSubmissionState({ isLoading: true, isSuccess: false, error: null });

    try {
      console.log("Form submitted:", formData);

      await emailjs.sendForm(
        "service_bdy0km4",
        "template_5hvnavi",
        form.current,
        {
          publicKey: "0vTLwyBYfsSlek_LW",
        }
      );

      console.log("SUCCESS!");
      setSubmissionState({ isLoading: false, isSuccess: true, error: null });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        title: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmissionState((prev) => ({ ...prev, isSuccess: false }));
      }, 5000);
    } catch (error: any) {
      console.log("FAILED...", error?.text || error);
      setSubmissionState({
        isLoading: false,
        isSuccess: false,
        error:
          "Failed to send message. Please try again or contact me directly.",
      });
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Let's Get started!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Let's make big; bigger.
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              I'm always interested in new opportunities and exciting projects.
              Whether you need a developer or want to discuss a business idea,
              I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <motion.a
                whileHover={{ x: 10 }}
                href="mailto:prakharverma.work@gmail.com"
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
                prakharverma.work@gmail.com
              </motion.a>

              <motion.a
                whileHover={{ x: 10 }}
                href="https://linkedin.com/in/prakharverma057"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn Profile
              </motion.a>

              <motion.a
                whileHover={{ x: 10 }}
                href="https://github.com/prakharverma057"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <GitHub className="w-6 h-6" />
                GitHub Profile
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Success Message */}
              {submissionState.isSuccess && (
                <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {submissionState.error && (
                <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 rounded-lg">
                  {submissionState.error}
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex... Johnny Appleseed"
                  required
                  disabled={submissionState.isLoading}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ex... gimme1more@apple.pls"
                  required
                  disabled={submissionState.isLoading}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Ex... FrontEnd development project"
                  required
                  disabled={submissionState.isLoading}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I usually like to receive compliments but this time im really hoping for some innovative projects."
                  required
                  rows={5}
                  disabled={submissionState.isLoading}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                ></textarea>
              </div>

              <motion.button
                whileHover={!submissionState.isLoading ? { scale: 1.05 } : {}}
                whileTap={!submissionState.isLoading ? { scale: 0.95 } : {}}
                type="submit"
                disabled={submissionState.isLoading}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {submissionState.isLoading ? "Sending..." : "Lessgooo!"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
