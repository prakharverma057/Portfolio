// App.tsx
import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
//import { Projects } from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Cursor from "./components/ui/Cursor";
import LoadingScreen from "./components/ui/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-background-light dark:bg-background-dark transition-colors duration-300">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Cursor />
            <Header />
            <main className="overflow-hidden">
              <AnimatePresence>
                <>
                  <Hero key="hero" />
                  <About key="about" />
                  <Experience key="experience" />
                  {/* <Projects key="projects" /> */}
                  <Skills key="skills" />
                  <Contact key="contact" />
                </>
              </AnimatePresence>
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
