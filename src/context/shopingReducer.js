import data from "../data";

export const initialState = {
  data: [...data],
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ALL":
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};
