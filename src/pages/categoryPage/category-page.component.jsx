import React from "react";

import "./category-page.styles.scss";

import { selectCollections } from "../../redux/shop/shop.selector";
import { connect } from 'react-redux';

import CollectionItem from "../../components/collection-item/collection-item.component"

const CategoryPage = ({ match, collections }) => {
  const category =
    collections.find((collection) => collection.routeName === match.params.id);
  return (
    <div className='category-page'>
      <h2 className='title'>{category.title}</h2>
      <div className='items'>{category.items.map(
        item => <CollectionItem item={item} key={item.id} />
      )}
      </div>

    </div>
  )
};

const mapStateToProps = (state) => ({ collections: selectCollections(state) });

export default connect(mapStateToProps)(CategoryPage);
