import { GET_PRODUCTS } from "../constants/actionTypes";
import * as api from "../../api/index";

export const getProducts = (searchData) => async (dispatch) => {
  try {
    const { data } = await api.getProducts(searchData);
    console.log(data);
    dispatch({ type: GET_PRODUCTS, data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getProductsByName = (searchText) => async (dispatch) => {
  try {
    const { data } = await api.getProductsByName(searchText);
    dispatch({ type: GET_PRODUCTS, data });
  } catch (error) {
    console.log(error.response);
  }
};
