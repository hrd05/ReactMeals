import { useState } from "react";
import Header from "./components/Layout/Header";
import { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [cartOpen, setCart] = useState(false);

  const openModalHandler = () => {
    setCart(true);
  }

  const closeModalHandler = () => {
    setCart(false);
  }

  return (
    <Fragment>
      <Header onClick={openModalHandler} />
      <main>
        {cartOpen && <Cart onClose={closeModalHandler} />}
        <Meals />
      </main>
    </Fragment>

  );
}

export default App;
