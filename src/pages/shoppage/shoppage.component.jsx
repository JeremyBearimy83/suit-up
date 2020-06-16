import React, { Component } from "react";
import ShopPageData from "./ShopPageData.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.components";
class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = { collections: ShopPageData };
  }

  render() {
    const { collections } = this.state;
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
  }
}

export default ShopPage;
