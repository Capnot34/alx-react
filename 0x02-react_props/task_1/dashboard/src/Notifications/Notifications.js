import React from "react";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";

function Notifications() {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <button
        className="close-button"
        aria-label="Close"
        onClick={handleButtonClick}
        style={{
          float: "right",
          border: "none",
          backgroundColor: "transparent",
        }}
      >
        <img src={closeIcon} alt="Close icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
export default Notifications;
