import * as types from "../../actionsTypes/actionsTypes.js";
import axios from "axios";

export function getProducts() {
  return async function (dispatch) {
    try {
      await axios.get(`http://localhost:3000/products`).then((response) => {
        dispatch({
          type: types.GET_PRODUCTS,
          payload: response.data,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getProductByName(name) {
  return async function (dispatch) {
    try {
      await axios
        .get(`http://localhost:3000/products?name=${name}`)
        .then((response) => {
          dispatch({
            type: types.GET_PRODUCTS_BY_NAME,
            payload: response.data,
          });
        });
    } catch (error) {
      alert("does not exist");
      console.log(error);
    }
  };
}

export function createProduct(newProduct) {
  return async function (dispatch) {
    try {
      const product = await axios.post(
        `http://localhost:3000/products`,
        newProduct
      );

      return dispatch({
        type: types.CREATE_PRODUCT,
        payload: product.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      const product = response.data;
      dispatch({ type: types.GET_PRODUCT_BY_ID, payload: product });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteProduct(id) {
  return async function (dispatch) {
    try {
      const product = await axios
        .delete(`http://localhost:3000/products/${id}`)
        .then((response) => {
          dispatch({ type: types.DELETE_PRODUCT, payload: product.data });
        });
    } catch (error) {
      console.log(error);
    }
  };
}
