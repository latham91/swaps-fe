import "../styles/Modal.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUsersListings } from "../utils/listingFetch";
import OfferCard from "../components/OfferCard";

export default function Modal({ onClose, wantedId }) {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const data = await getUsersListings(user.id);
      setListings(data.listings);
    };

    fetchListings();
  }, [user.id]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Your Listings</h2>
        {listings.length > 0 ? (
          <div className="offer-cards">
            {listings.map((listing) => (
              <OfferCard key={listing._id} swapListing={listing} wantedId={wantedId} type="swap" closeModal={onClose} />
            ))}
          </div>
        ) : (
          <h3>You have no listings to swap</h3>
        )}
        <button onClick={onClose} className="primary-btn">
          Close
        </button>
      </div>
    </div>
  );
}
