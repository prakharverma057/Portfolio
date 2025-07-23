import ThemeProvider from "./context/ThemeContext";
import Navigation from "./components/Navigation";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CursorTrail from "./components/CursorTrail";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <CursorTrail />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default App;
