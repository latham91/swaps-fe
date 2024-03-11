import { useState, useEffect } from "react";
import "../styles/ProductPage.css";
import OfferCard from "../components/OfferCard";
import Modal from "../components/Modal";
import { getListingById } from "../utils/listingFetch";
import { useParams } from "react-router-dom";

export default function ProductPage() {
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
      <button className="secondary-btn" onClick={handleSwapClick}>
        Swap
      </button>

      {isModalOpen && <Modal onClose={closeModal} />}

      <div className="offer-card-container">
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </div>
  );
}
