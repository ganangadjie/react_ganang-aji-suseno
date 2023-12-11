import Navbar from "./components/navbar";
import Header from "./components/header";
import ProductList from "./components/productList";
import FormProduct from "./components/formProduct";

export default function CreateProduct() {
  return (
    <>
      <Navbar />
      <Header />
      <FormProduct />
      <ProductList/>
    </>
  );
}
