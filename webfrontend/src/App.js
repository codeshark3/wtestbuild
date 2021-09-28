import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/index.css";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Routes from "./components/Routes";
import { Container } from "react-bootstrap";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
document.title = "Water Test";

const App = () => {
  return (
    <Router>
      <Route
        render={(props) => (
          <div className="layout">
            <Sidebar {...props} />
            <div className="layout__content">
              <Header />
              <div className="layout__content-main">
                <Container style={{ paddingTop: "20px" }}>
                  <Routes />
                </Container>
              </div>
              <Footer />
            </div>
          </div>
        )}
      />
    </Router>
  );
};

export default App;

// blue:#333366     red:#cc0066
