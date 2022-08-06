import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import MainSection from "./Components/MainSection/MainSection";
import { Provider } from "./Components/context";
import Modal from "./Components/Modal/Modal";
import ModalConfirmed from "./Components/ModalConfirmed/ModalConfirmed";

const meals = [
  { name: "Sushi", desc: "Finest fish and veggies", price: 22.99, id: 1 },
  { name: "Schnitzel", desc: "A german specialty", price: 16.5, id: 2 },
  {
    name: "Barbeque Burger",
    desc: "American, raw, meaty",
    price: 12.99,
    id: 3,
  },
  { name: "Green Bowl", desc: "Healthy...and green...", price: 18.99, id: 4 },
  { name: "Pasta Bolognese", desc: "Italian specialty", price: 17.99, id: 5 },
];

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConf, setModalConf] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div id="app">
      <Provider
        value={{
          modalOpen,
          setModalOpen,
          setModalConf,
          numberOfItems,
          setNumberOfItems,
          total,
          setCartItems,
          cartItems,
          setTotal,
        }}
      >
        <Header />
        <AboutUs />
        <MainSection data={meals} />
        <Footer />
        {modalOpen && <Modal />}
        {modalConf && <ModalConfirmed />}
      </Provider>
    </div>
  );
};

export default App;
