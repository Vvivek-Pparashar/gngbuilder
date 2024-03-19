import "./App.css";
import Crausal from "./components/Crausal/Crausal";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Brief from "./components/AboutUs/brief/Brief";
import Vision from "./components/AboutUs/vision/Vision";
import InputForm from "./components/ContactUs/inputform/InputForm";
import Features from "./components/Features/Features";
import { ScrollRestoration } from "react-router-dom";
import ShowCase from "./components/OurProjects/showcase/ShowCase";
import EatShopGrow from "./components/EatShopGrow/EatShopGrow";
import RecentlyJoined from "./components/RecentlyJoined/RecentlyJoined";

export default function App() {
  return (
    <div className="hero-page">
      <Navbar />
      <div className="hero-overlay">
        <div className="hero-overlay-text">
          <h1>
            YOU DREAM IT, WE <span style={{color:"#C5A253"}}>BUILD</span> IT
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <button>Explore More</button>
        </div>
        <Crausal />
      </div>
      <Brief />
      {/* <ShowCase /> */}
      <EatShopGrow />
      <Features />
      <Vision />
      <RecentlyJoined />
      <InputForm />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
