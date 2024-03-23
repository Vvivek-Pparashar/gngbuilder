import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  ClockCircleTwoTone,
  HddTwoTone,
  MailTwoTone,
  MessageTwoTone,
  MobileTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import "leaflet/dist/leaflet.css";
import "./inputForm.css";
import { useState } from "react";

const InputForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    interested: "",
    message: "",
  });

  let message = `First Name = ${data.firstName} %0DLast Name = ${data.lastName}%0DMobile No. = ${data.mobileNo}%0DEmail = ${data.email} %0DMessage = ${data.message}`;
  return (
    <div className="if" id="Location">
      <div className="if-input">
        <h2>REQUEST CALL BACK</h2>
        <p>PLEASE FILL YOUR DETAILS BELOW</p>
        <div className="if-input-form">
          <div className="if-input-form-row">
            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                <UserOutlined style={{ color: "#1677FF" }} />
              </div>
              <input
                placeholder="First Name"
                className="input"
                value={data.firstName}
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />
            </div>

            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                <UserOutlined style={{ color: "#1677FF" }} />
              </div>
              <input
                placeholder="Last Name"
                className="input"
                value={data.lastName}
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="if-input-form-row">
            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                <MobileTwoTone />
              </div>
              <input
                placeholder="Mobile No"
                className="input"
                value={data.mobileNo}
                onChange={(e) => setData({ ...data, mobileNo: e.target.value })}
              />
            </div>

            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                <MailTwoTone />
              </div>
              <input
                placeholder="Email"
                className="input"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
          </div>

          <div className="if-input-form-row">
            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                <ClockCircleTwoTone />
              </div>
              <input type="date" className="input" />
            </div>
          </div>

          <div className="if-input-form-row">
            <div className="if-input-form-container">
              <div className="if-input-form-abs">
                <MessageTwoTone />
              </div>
              <input
                placeholder="Message"
                className="input"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
              />
            </div>
          </div>

          <a
            href={`mailto:${"vivekparashartkd@gmail.com"}?subject= ${"subject"}&body=${message}`}
          >
            <button onClick={onclick}>Contact us</button>
          </a>
        </div>
      </div>
      <MapContainer
        className="markercluster-map"
        center={[30.6534578, 76.850186]}
        zoom={14}
        maxZoom={17}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[30.6534578, 76.850186]}>
          <Popup>
            GnG Alianza <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default InputForm;
