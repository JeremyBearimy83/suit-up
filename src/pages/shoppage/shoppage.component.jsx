import React from "react";
import { Route } from "react-router-dom";

import CategoryPage from "../../pages/categoryPage/category-page.component";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

const ShopPage = (props) => {
  const { match } = props;
  return (
    <div className='shop-page'>
      <Route exact path="/shop" component={CollectionOverview} />
    </div>
  );
};

export default ShopPage;
