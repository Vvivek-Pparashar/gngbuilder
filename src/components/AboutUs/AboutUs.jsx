import Hero from "./hero/Hero";
import Brief from "./brief/Brief";
import Vision from "./vision/Vision";
import "./hero/hero.css";
import "./brief/brief.css";
import "./vision/vision.css";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import NewAbout from "./NewAbout";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewAbout/>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default AboutUs;
