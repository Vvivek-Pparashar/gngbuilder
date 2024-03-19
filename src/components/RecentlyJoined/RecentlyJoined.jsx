import React from "react";
import sn1 from "../../assets/croma.jpg";
import sn2 from "../../assets/masti.jpg";
import sn3 from "../../assets/diy.jpg";
import "./RecentlyJoined.css";

const RecentlyJoined = () => {
  return (
    <div className="rj">
      <h1>Recently Joined</h1>
      <div className="rj-c">
        <div className="rj-c1">
          <img src={sn1} />
          <h2>Tata Croma</h2>
        </div>
        <div className="rj-c1">
          <img src={sn2} />
          <h2>Masti Zone</h2>
        </div>
        <div className="rj-c1">
          <img src={sn3} />
          <h2>Mr. D.I.Y</h2>
        </div>
      </div>
    </div>
  );
};

export default RecentlyJoined;
