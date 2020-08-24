import ShopPageData from "../../pages/shoppage/ShopPageData";

const INITIAL_STATE = { collections: ShopPageData };

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default shopReducer;
