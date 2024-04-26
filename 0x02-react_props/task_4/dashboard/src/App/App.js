import React from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../App/App.css";
import CourseList from "../CourseList/CourseList";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          {this.state.isLoggedIn ? <CourseList /> : <Login />}
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
