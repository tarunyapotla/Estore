import { WishlistState } from "../wishlist";

const wishlistReducer = (state: WishlistState, action: any) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item: any) => item.id === action.payload.id
        ),
      };
    case "CLEAR_ALL":
      return { ...state, wishlistItems: [] };
    default:
      return state;
  }
};

export { wishlistReducer };
