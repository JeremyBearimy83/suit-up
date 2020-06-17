import React from "react";
import "./collection-preview.styles.css";
import CollectionItem from "../collection-item/collection-item.component";
const CollectionPreview = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title}</h1>
      <div className="preview">
        {props.items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherprops }) => (
            <CollectionItem key={id} {...otherprops} />
          ))}
      </div>
    </div>
  );
};
export default CollectionPreview;
