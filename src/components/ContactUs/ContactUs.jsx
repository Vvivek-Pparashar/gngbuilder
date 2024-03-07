import LandingPage from "./landingpage/LandingPage";
import InputForm from "./inputform/InputForm";
import "./landingpage/landingPage.css";
import "./inputform/inputForm.css";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import ContactUsCC from "./ContactUsCC";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <ContactUsCC/>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default ContactUs;
