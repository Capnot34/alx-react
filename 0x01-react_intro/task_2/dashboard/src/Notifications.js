import react from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png"; 

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
      <button
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
        style={{ float: "right" }}
      >
        <img src={closeIcon} alt="Close notification" />
      </button>
    </div>
  );
}

export default Notifications;
