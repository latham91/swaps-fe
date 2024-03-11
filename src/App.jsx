import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import CreateListingPage from "./pages/CreateListingPage";
import AccountPage from "./pages/AccountPage";
import ViewListingsPage from "./pages/ViewListingsPage";
import LoginPage from "./pages/LoginPage";
import { userSession } from "./utils/authFetch";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const getSession = async () => {
      const data = await userSession();

      if (data.success) {
        setUser(data.user);
      }
    };

    getSession();
  }, [setUser]);

  return (
    <main className="main-container">
      <ToastContainer position="top-center" />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:listingId" element={<ProductPage />} />
        <Route path="/create" element={<CreateListingPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/view-listings" element={<ViewListingsPage />} />
        <Route path="/pagenotfound" element={<PageNotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}
