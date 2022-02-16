import { useEffect } from "react";
import "./App.css";
import customFetch from "./utils/customFetch";
import { useState } from "react";
const { data } = require("./utils/data");

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // customFetch(2000, data)
    //   .then(data => setProducts(data))
    //   .catch(error => console.log(error));
    fetch("https://bodegas-del-sur.herokuapp.com/api/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
  <>
  <h1>Products</h1>
  <ul>
    {products.map(product => <li key={product.id}>{product.name}</li>)}
  </ul>
  </>
  )
}

export default App;
