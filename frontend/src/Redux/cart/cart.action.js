// Cart Action Code Here
import axios from "axios";
import {
  ADD_TO_CART_ERROR,
  ADD_TO_CART_LOADING,
  ADD_TO_CART_SUCCESS,
  DELETE_CART_ERROR,
  DELETE_CART_LOADING,
  DELETE_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./cart.actionTypes";

export const getCartProducts = () => async (dispatch) => {
  dispatch({
    type: GET_CART_LOADING,
  });
  try {
    let response = await axios.get(
      `https://drab-cyan-puffer-cap.cyclic.app/cart`
    );
    dispatch({
      type: GET_CART_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_CART_ERROR,
      payload: e,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_CART_LOADING,
  });
  try {
    await axios
      .delete(`https://drab-cyan-puffer-cap.cyclic.app/cart/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_CART_SUCCESS,
        });
      });
  } catch (e) {
    dispatch({
      type: DELETE_CART_ERROR,
    });
  }
};

//
export const addItemCart = (item) => async (dispatch) => {
  try {
    console.log(item); 
    await axios
      .post(`https://drab-cyan-puffer-cap.cyclic.app/cart`, item)
      .then(() => { 
        dispatch({
          type: ADD_TO_CART_SUCCESS,
        });
      });
  } catch (e) {
    dispatch({
      type: ADD_TO_CART_ERROR,
      payload: e,
    });
  }
};
