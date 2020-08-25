import React from "react";

import "./collection-overview.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.components";
import { selectCollections } from "../../redux/shop/shop.selector";

import { connect } from "react-redux";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
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

export default connect(mapStateToProps)(CollectionOverview);
