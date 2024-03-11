// Modal.jsx
import React from "react";
import OfferCard from "../components/OfferCard";
import "../styles/Modal.css";

export default function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Your Listings</h2>
        <OfferCard type="swap" />
        <OfferCard type="swap" />
        <OfferCard type="swap" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
