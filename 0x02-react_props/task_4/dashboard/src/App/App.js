import React from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../App/App.css";
import CourseList from "../CourseList/CourseList";


function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
        
      </div>
    </>
  );
}

export default App;
