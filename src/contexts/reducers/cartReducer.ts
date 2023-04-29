import { CartState } from "../cart";

const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item: any) => item.id !== action.payload.id
        ),
      };
    case "CHANGE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item: any) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    case "CLEAR_ALL":
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export { cartReducer };
