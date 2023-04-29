import { createContext, useCallback, useReducer } from "react";
import { cartReducer } from "./reducers/cartReducer";

export type CartState = {
  cartItems: Array<any>;
};

type CartContextType = {
  state: CartState;
  addItemToCart: (item: any) => void;
  removeItemFromCart: (item: any) => void;
  changeQty: (item: any, qty: number) => void;
  cartTotal: () => void;
  clearAll: () => void;
};

const initialState = {
  state: { cartItems: [] },
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  changeQty: () => {},
  cartTotal: () => {},
  clearAll: () => {},
};

const CartContext = createContext<CartContextType>(initialState);

type ContextProps = {
  children: React.ReactNode;
};

const CartContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  const addItemToCart = (item: any) => {
    // e.preventDefault();
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeItemFromCart = (item: any) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: item.id } });
  };

  const changeQty = useCallback((item: any, qty: number) => {
    dispatch({ type: "CHANGE_QUANTITY", payload: { id: item.id, qty } });
  }, []);

  const cartTotal = () => {
    return state.cartItems.reduce((acc, curr) => {
      return acc + curr.qty * curr.price;
    }, 0);
  };

  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const contextValue = {
    state,
    addItemToCart,
    removeItemFromCart,
    changeQty,
    cartTotal,
    clearAll,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
