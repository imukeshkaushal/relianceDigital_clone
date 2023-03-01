import {
  GET_POSTS_ERROR,
  GET_POSTS_LOADING,
  GET_POSTS_RESET,
  GET_POSTS_SUCCESS,
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
    case GET_POSTS_SUCCESS: {
      console.log("state", payload);
      const categories = {};
      payload.forEach((product) => {
        if (categories[product.brand] == undefined) {
          categories[product.brand] = 1;
        } else categories[product.brand]++;
      });
      console.log(categories, "category");
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
    //   console.log("price range called", payload);
      let newData = state.data.filter((product) => {
        // console.log(convertToNum(product.price), "price");
        // console.log(payload, "payload");
        return convertToNum(product.price) <= payload;
      });
      console.log(newData, "price range filter");
      return { ...state, data: [...newData] };
    }
    case "FILTER_BY_CATEGORY": {
      console.log("FILTER_BY_CATEGORY callled");
      let filteredData = state.data.filter(
        (product) => product.brand == payload
      );
      console.log(filteredData);
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
