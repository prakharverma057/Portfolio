import ThemeProvider from "./context/ThemeContext";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
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
