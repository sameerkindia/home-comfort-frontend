import data from "../data";

export const initialState = {
  data: [...data],
  cart: [],
  cartOpen: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN":
      return { ...state, cartOpen: true };

    default:
      return { ...state };
  }
};
