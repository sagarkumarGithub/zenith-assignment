import "./App.css";
import Ameties from "./components/Ameties/Ameties";
import Banner from "./components/Banner/Banner";
import Companies from "./components/Companies/Companies";
import Exlpore from "./components/Explore/Exlpore";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ProjectHilight from "./components/ProjectHilight/ProjectHilight";
import Projects from "./components/Projects/Projects";
import Testimonial from "./components/Testimonials/Testimonial";


function App() {
  return (
    <>
      <Navbar />
      {/* <Testimonial /> */}
      <Hero />
      <Companies />
      {/* <Exlpore /> */}
      {/* <Ameties /> */}
      {/* <Projects /> */}
      <ProjectHilight />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
