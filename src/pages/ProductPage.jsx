import "../styles/ProductPage.css";
import { useState, useEffect, useContext } from "react";
import OfferCard from "../components/OfferCard";
import Modal from "../components/Modal";
import { getListingById } from "../utils/listingFetch";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProductPage() {
  const { user } = useContext(AuthContext);
  const { listingId } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [listing, setListing] = useState({});

  const handleSwapClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const getListing = async () => {
      const data = await getListingById(listingId);
      setListing(data.listing);
      console.log(data.listing);
    };

    getListing();
  }, [listingId]);

  if (!listing.userId) {
    return <h1>Loading listing...</h1>;
  }

  return (
    <div className="product-page">
      <h1 className="product-title">{listing.title}</h1>
      <img className="product-image" src={listing.imageUrl} alt={listing.title} />
      <h2 className="product-username">@{listing.userId.username}</h2>
      <p className="product-description">{listing.description}</p>

      {user && user.id !== listing.userId._id && (
        <button className="secondary-btn" onClick={handleSwapClick}>
          Swap
        </button>
      )}

      {user && user.id === listing.userId._id && (
        <button className="secondary-btn" onClick={handleSwapClick}>
          Delete Listing
        </button>
      )}

      {!user && (
        <Link to="/login" className="secondary-btn">
          Login to Swap
        </Link>
      )}

      {isModalOpen && <Modal onClose={closeModal} wantedId={listing._id} />}

      {listing.offersArray.length > 0 ? (
        <div className="offer-card-container">
          {listing.offersArray.map((offer) => (
            <OfferCard key={offer._id} offer={offer.offerListingId} />
          ))}
        </div>
      ) : (
        <h2>No offers yet</h2>
      )}
    </div>
  );
}
