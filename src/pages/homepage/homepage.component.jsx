import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

// We can use a functional component because we don't really need lifecyle
// methods or store state

const Homepage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default Homepage;
