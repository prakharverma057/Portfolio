import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Star, Zap, Rocket, Code, Briefcase } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Try this alternative approach using whileInView */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            data-testid="about-me-heading"
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-30"></div>
              <div className="relative">
                <div className="relative h-80 w-80 rounded-full overflow-hidden border-2 border-white dark:border-gray-800">
                  <img
                    src="./profile-2.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full z-10 flex items-center justify-center text-white"
                >
                  <Code size={28} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-full z-10 flex items-center justify-center text-white"
                >
                  <Briefcase size={24} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Hi! I'm a web developer...
              <i> you must have guessed that by now.</i> It all started from
              exploring every complex fascinating softwares to learning HTML,
              after i got my first computer, and that has led me to pursue this
              tech stack as my venture.{" "}
              <i>
                just coded "hello world!" and i am so ready to hack NASA
                already...
              </i>
              <br />I am passionate about crafting solutions and love imparting
              others what i know. <i> I'm a good teacher btw...</i>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Beyond coding, I'm an entrepreneur at heart. The first rule always
              being to create meaning. I observe the world around me and develop
              my own ideas to solve...
              <i>
                basically, I'm batman in my world. and btw please don't ask
                about my terrible ventures!!
              </i>
              . I love to teach{" "}
              <i>and feel proud to see the results i produced</i>
            </motion.p>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex flex-row justify-between font-bold"
            >
              <span className="flex flex-col align-middle justify-center">
                I know how to Learn.
                <p className="text-sm text-gray-500 flex justify-center ">
                  (I know how to teach)
                </p>
              </span>
              <span className="flex flex-col align-middle justify-center ">
                I know how to Lead.
                <p className="text-sm text-gray-500 flex justify-center ">
                  (I know how to Build)
                </p>
              </span>
              <span className="flex flex-col align-middle justify-center">
                I know how to Present.
                <p className="text-sm text-gray-500 flex justify-center ">
                  (I know how to deal)
                </p>
              </span>
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
