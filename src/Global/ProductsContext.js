import React, { createContext, useState } from "react";

import dslr from "../assets/dslr.jpg";
import headphones from "../assets/headphones.jpg";
import iphone from "../assets/iphone.jpg";
import blueYetti from "../assets/microphone.jpg";
import perfume from "../assets/perfume.jpg";
import ring from "../assets/rings.jpg";
import shoes from "../assets/shoes.jpg";
import watch from "../assets/watch.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products] = useState([
    {
      id: 1,
      name: "Dslr",
      price: 900,
      image: dslr,
      status: "hot",
    },
    {
      id: 2,
      name: "Headphones",
      price: 500,
      image: headphones,
      status: "new",
    },
    {
      id: 3,
      name: "Iphone",
      price: 1000,
      image: iphone,
      status: "hot",
    },
    {
      id: 4,
      name: "BlueYetti",
      price: 700,
      image: blueYetti,
      status: "hot",
    },
    {
      id: 5,
      name: "Perfume",
      price: 300,
      image: perfume,
      status: "new",
    },
    {
      id: 6,
      name: "Ring",
      price: 800,
      image: ring,
      status: "new",
    },
    {
      id: 7,
      name: "Shoes",
      price: 400,
      image: shoes,
      status: "hot",
    },
    {
      id: 8,
      name: "Watch",
      price: 900,
      image: watch,
      status: "new",
    },
  ]);
  return (
    <ProductsContext.Provider
      value={{
        products: [...products],
      }}
    >
      {" "}
      {props.children}{" "}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
