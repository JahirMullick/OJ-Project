import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () =>{
  let localCartData = localStorage.getItem("ojcart");
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 500,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increment and decrement.

  const setDecrease = (id) =>{
    dispatch({ type: "SET_DECREMENT", payload: id});
  };
  const setIncrement = (id) =>{
    dispatch({ type: "SET_INCREMENT", payload: id});
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear cart
  const clearCart = ()=> {
    dispatch({type:"CLEAR_CART"})
  }

  // to add data in local storage
  //get or set
  useEffect(()=>{
    dispatch({ type: "CART_TOTAL_ITEM"});
    dispatch({ type: "CART_TOTAL_PRICE"});
    localStorage.setItem("ojcart", JSON.stringify(state.cart));
  },[state.cart]);

  return (
    <CartContext.Provider value={{
       ...state, 
       addToCart,
      removeItem, 
      clearCart,
      setDecrease,
      setIncrement,
       }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
