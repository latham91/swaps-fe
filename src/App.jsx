import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";

export default function App() {
  return (
    <main className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pagenotfound" element={<PageNotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}
