import React, { Component } from "react";

import "./directory-menu.styles.scss";
import MenuItem from "../menu-item/menu-item.components";

import { selectSections } from "../../redux/directory/directory.selectors";
import { connect } from "react-redux";

const DirectoryMenu = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: selectSections(state),
});
export default connect(mapStateToProps)(DirectoryMenu);
