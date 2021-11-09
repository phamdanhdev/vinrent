import axios from "axios";

// const URL = "https://demo-mern-blog-phamdanhdev.herokuapp.com";
const API = axios.create({ baseURL: "http://localhost:5000" });

export const getProducts = (searchData) =>
  API.get(
    `/product?type=${searchData.type[0]}&kind=${searchData.type[1]}&province=${searchData.area[0]}&district=${searchData.area[1]}`
  );
export const getProductsByName = (searchText) =>
  axios.get(`${URL}/products?name=${searchText}`);
