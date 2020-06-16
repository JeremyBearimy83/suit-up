import React from "react";
import DirectoryMenu from "../../components/directory-menu/directory-menu.components.jsx";
import "./homepage.styles.scss";

const Homepage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
};
export default Homepage;
