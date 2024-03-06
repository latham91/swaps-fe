import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </>
  );
}
