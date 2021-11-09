import { GET_PRODUCTS } from "../constants/actionTypes";

const productReducer = (productData = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...productData, action.data];

    default:
      return productData;
  }
};

export default productReducer;
