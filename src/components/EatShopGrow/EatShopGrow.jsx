import React from "react";
import sn1 from "../../assets/ALIANZA.png";
import sn2 from "../../assets/Eat.png";
import sn3 from "../../assets/Shop.png";
import sn4 from "../../assets/Grow.png";
import "./EatShopGrow.css";

const EatShopGrow = () => {
  return (
    <div className="esg">
      <img src={sn1} />
      <div className="esg1">
        <div className="esg1r">
          <img src={sn2} />
        </div>
        <div className="esg1l">
          <h1>Eat</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium doloribus quis vitae asperiores, cumque recusandae ab,
            nam illum tempora at, nulla quam et fugiat! Molestiae, eaque
            quaerat. Unde, officiis vero.
          </p>
        </div>
      </div>

      <div className="esg1 esgcr">
        <div className="esg1l">
          <h1>Shop</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium doloribus quis vitae asperiores, cumque recusandae ab,
            nam illum tempora at, nulla quam et fugiat! Molestiae, eaque
            quaerat. Unde, officiis vero.
          </p>
        </div>
        <div className="esg2r">
          <img src={sn3} />
        </div>
      </div>

      <div className="esg1">
        <div className="esg3r">
          <img src={sn4} />
        </div>
        <div className="esg1l">
          <h1>Grow</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium doloribus quis vitae asperiores, cumque recusandae ab,
            nam illum tempora at, nulla quam et fugiat! Molestiae, eaque
            quaerat. Unde, officiis vero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EatShopGrow;
