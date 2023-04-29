import { createContext, useReducer } from "react";
import { wishlistReducer } from "./reducers/wishlistReducer";

export type WishlistState = {
  wishlistItems: Array<any>;
};

type WishlistContextType = {
  state: WishlistState;
  addToWishlist: (item: any) => void;
  removeFromWishlist: (item: any) => void;
  clearAll: () => void;
};

const initialState = {
  state: { wishlistItems: [] },
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  clearAll: () => {},
};

const WishlistContext = createContext<WishlistContextType>(initialState);

type ContextProps = {
  children: React.ReactNode;
};

const WishlistContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, {
    wishlistItems: [],
  });

  const addToWishlist = (item: any) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: item });
  };

  const removeFromWishlist = (item: any) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id: { item } } });
  };

  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const contextValue = {
    state,
    addToWishlist,
    removeFromWishlist,
    clearAll,
  };
  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistContext, WishlistContextProvider };
