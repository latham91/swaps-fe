import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import CreateListingPage from "./pages/CreateListingPage";
import AccountPage from "./pages/AccountPage";
import ViewListingsPage from "./pages/ViewListingsPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <main className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/create" element={<CreateListingPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/view-listings" element={<ViewListingsPage />} />
      </Routes>
      <Footer />
    </main>
  );
}
