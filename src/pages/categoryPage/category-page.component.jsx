import React from "react";

import "./category-page.styles.scss";

import { selectCollections } from "../../redux/shop/shop.selector";
import { connect } from 'react-redux';

import CollectionItem from "../../components/collection-item/collection-item.component"

const CategoryPage = ({ match, collections }) => {
  const categoryItems =
    collections.find((collection) => collection.routeName === match.params.id);
  return (
    <div className='category-page'>
      {categoryItems.items.map(item => <CollectionItem item={item} key={item.id} />)}
    </div>
  )
};

const mapStateToProps = (state) => ({ collections: selectCollections(state) });

export default connect(mapStateToProps)(CategoryPage);
