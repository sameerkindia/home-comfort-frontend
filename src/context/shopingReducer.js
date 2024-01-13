import data from "../data";

export const initialState = {
  data: [...data],
  cart: [],
  cartOpen: false,
  totalQuantity: 0,
  totalPrice: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_CART":
      return { ...state, cartOpen: true };

    case "CLOSE_CART":
      return { ...state, cartOpen: false };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalQuantity: state.totalQuantity++,
      };

    case "INC_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity++,
              total: product.total + product.price,
            };
          } else {
            return product;
          }
        }),
        totalQuantity: state.totalQuantity++,
      };

    case "DEC_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity--,
              total: product.total - product.price,
            };
          } else {
            return product;
          }
        }),
        totalQuantity: state.totalQuantity--,
      };

    case "TOTAL_PRICE":
      return {
        ...state,
        totalPrice: state.cart.reduce((acc, item) => {
          return (acc += item.total);
        }, 0),
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((product) => {
          return product.id !== action.payload;
        }),
      };

    default:
      return { ...state };
  }
};
