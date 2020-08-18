import React from "react";
import "./collection-item.styles.css";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = (props) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{props.name}</span>
        <span className="price">{props.price}</span>
      </div>
      <CustomButton inverted>add to cart</CustomButton>
    </div>
  );
};
export default CollectionItem;
