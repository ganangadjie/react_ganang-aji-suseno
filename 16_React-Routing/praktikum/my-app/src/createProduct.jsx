import Navbar from "./components/navbar";
import FormProduct from "./pages/formCreateProduct";
import ListItem from "./components/productList";
import { useEffect } from "react";
import Header from "./components/header";

export default function CreateProduct({ setData, data }) {
  useEffect(() => {
    alert("Welcome to Create Product");
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <FormProduct setingData={setData} />
      <ListItem data={data} removeList={setData} />
    </>
  );
}
