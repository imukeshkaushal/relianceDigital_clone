import {
  GET_POSTS_ERROR,
  GET_POSTS_LOADING,
  GET_POSTS_RESET,
  GET_POSTS_SUCCESS,
} from "./Product.types";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./Product.types";

let initState = {
  loading: false,
  error: false,
  data: [],
  categories: {},
};

export const postReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case GET_POSTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_POSTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case GET_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_POSTS_SUCCESS: {
      const categories = {};
      payload.forEach((product) => {
        if (categories[product.brand] == undefined) {
          categories[product.brand] = 1;
        } else categories[product.brand]++;
      });

      return {
        ...state,
        loading: false,
        data: payload,
        categories: categories,
      };
    }
    case GET_POSTS_RESET: {
      return { ...initState };
    }

    case "SORT_LOW_TO_HIGH": {
      state.data.sort((a, b) => convertToNum(a.price) - convertToNum(b.price));
      let newData = [...state.data];
      return { ...state, data: newData };
    }
    case "SORT_HIGH_TO_LOW": {
      state.data.sort((a, b) => convertToNum(b.price) - convertToNum(a.price));
      let newData = [...state.data];
      return { ...state, data: newData };
    }
    case "FILTER_BY_PRICE_RANGE": {
      let newData = state.data.filter((product) => {
        return convertToNum(product.price) <= payload;
      });

      return { ...state, data: [...newData] };
    }
    case "FILTER_BY_CATEGORY": {
      let filteredData = state.data.filter(
        (product) => product.brand == payload
      );

      return { ...state, data: filteredData };
    }
    default: {
      return state;
    }
  }
};
function convertToNum(str) {
  str = str.split("");
  str = str.filter((elem) => !isNaN(elem));
  str = str.join("");
  const num = +str;
  return num;
}
