import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartOpen, setCart] = useState(false);

  const openModalHandler = () => {
    setCart(true);
  }

  const closeModalHandler = () => {
    setCart(false);
  }

  return (
    <CartProvider >
      <Header onClick={openModalHandler} />
      <main>
        {cartOpen && <Cart onClose={closeModalHandler} />}
        <Meals />
      </main>
    </CartProvider>

  );
}

export default App;
