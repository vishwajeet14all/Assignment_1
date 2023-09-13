import { createContext, useContext } from "react";
import { useState } from "react";
import CartModal from "./components/CartModal.jsx";

//store th value of create context
const itemContext = createContext();

//custom hook
function useValue() {
  const value = useContext(itemContext);
  return value;
}

//custom provider
function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  //add cart
  const handleAdd = (prod) => {
    const index = cart.findIndex((item) => item.id === prod.id);
    // Define the maximum allowed items and maximum allowed price
    const maxItems = 8;
    // Calculate the total number of items in the cart
    const totalItemsInCart = cart.reduce((total, item) => total + item.qty, 0);
    // Check if adding the product would exceed the item limit
    if (totalItemsInCart + 1 > maxItems ) {      
      return;
    }

    if (index === -1) {
      // If the product is not in the cart
      setCart([...cart, { ...prod, qty: 1 }]);
      setTotal(total + prod.price);
    } else if (cart[index].qty < 8) {
      // If the product is already in the cart and adding it won't exceed the item limit
      cart[index].qty++;
      setCart([...cart]);
      setTotal(total + prod.price);
    }
    setItem(item + 1);
  };

  //remove cart
  const handleRemove = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart[index].qty--;
      setItem(item - 1);
      setTotal(total - cart[index].price);
      //deleting the product
      if (cart[index].qty === 0) {
        cart.splice(index, 1);
      }
    }
    setCart(cart);
  };

  //clear cart
  const clear = () => {
    setTotal(0);
    setItem(0);
    setCart([]);
  };

  //show cart or hide
  const toggle = () => {
    setShowCart(!showCart);
  };

  //default provider
  return (
    <itemContext.Provider
      value={{
        total,
        item,
        handleAdd,
        handleRemove,
        clear,
        toggle,
        cart,
      }}
    >
      {showCart && <CartModal />}
      {children}
    </itemContext.Provider>
  );
}

export { itemContext, useValue };
export default CustomItemContext;
