import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage.jsx";
import CreateProduct from "./createProduct.jsx";
import NotFound from "./components/notFound.jsx";
import DetailProduct from "./pages/detailProduct.jsx";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/createProduct"
          element={<CreateProduct data={data} setData={setData} />}
        />
        <Route
          path="/detailProduct/:id"
          element={<DetailProduct data={data} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
