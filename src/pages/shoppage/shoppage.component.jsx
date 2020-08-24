import React from "react";

import ShopPageData from "./ShopPageData.js";
import { selectCollections } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.components";

const ShopPage = ({ collections }) => {
  return (
    <div>
      {collections.map((collection) => (
        <CollectionPreview
          title={collection.title.toUpperCase()}
          key={collection.id}
          items={collection.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ collections: selectCollections(state) });

export default connect(mapStateToProps)(ShopPage);
