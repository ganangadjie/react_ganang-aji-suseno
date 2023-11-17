import Navbar from "./components/navbar";
import Header from "./components/header";
import FormProduct from "./components/formProduct";
import ProductList from "./components/productList"
import { useEffect, useState } from "react";

export default function CreateProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    alert("Welcome to Create Product");
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <FormProduct setingData={setData} />
      <ProductList data={data} removeList={setData} />
    </>
  );
}
