// Modal.jsx
import React from "react";
import "../styles/Modal.css";

export default function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
