import React from "react";
import hm1 from "../../../assets/briefIMG-alianza.png";
import "./OverView.css";

const OverView = () => {
  return (
    <div id="OverView" className="al-ov">
      <div className="al-ov-left">
        <h2>COMMERCIAL - GNG ALIANZA</h2>
        <p className="al-ov-left-p" style={{fontSize:"16px"}}>15x30 (450 SQ FT) | 16x70 (1120 SQ FT) | 15x80 (1200 SQ FT) <br></br> Shops & Showroom Available</p>
        {/* <p className="al-ov-left-p" style={{marginTop:"-40px"}}></p> */}
        <p>
        Alianza's Commercial Projects: Building Dreams. At Alianza, we take pride in constructing commercial spaces that inspire success. With our attention to detail and commitment to quality, we create buildings that stand the test of time. Together we can bring your vision to life and deliver exceptional commercial projects tailored to your business needs."
        </p>
        {/* <h6>
          
        </h6> */} 
        <button>Download Broucher</button>
      </div>
      <div className="al-ov-right">
        <img src={hm1} alt="alanza-comercial" />
      </div>
    </div>
  );
};

export default OverView;
