import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      // nếu sản phẩm đã tồn tại, tăng số lượng
      const existingIndex = state.findIndex(
        (item) => item.id === action.item.id
      );
      if (existingIndex !== -1) {
        const updated = [...state];
        updated[existingIndex].quantity += action.item.quantity || 1;
        return updated;
      }
      return [...state, { ...action.item, quantity: action.item.quantity || 1 }];
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    case "UPDATE_ITEM":
      return state.map((item) =>
        item.id === action.id ? { ...item, ...action.updates } : item
      );
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = (item) => dispatch({ type: "ADD_ITEM", item });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", id });
  const updateItem = (id, updates) =>
    dispatch({ type: "UPDATE_ITEM", id, updates });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateItem, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
