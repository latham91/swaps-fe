import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <Footer />      
    </>
  );
}
