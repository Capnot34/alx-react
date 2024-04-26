import React from "react";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
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
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem html={{ __html: getLatestNotification() }} /> 
      </ul>
    </div>
  );
}
export default Notifications;
