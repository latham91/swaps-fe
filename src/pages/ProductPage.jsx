import "../styles/ProductPage.css";
import { useState, useEffect, useContext } from "react";
import OfferCard from "../components/OfferCard";
import Modal from "../components/Modal";
import { deleteListing, getListingById } from "../utils/listingFetch";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function ProductPage() {
  const navigate = useNavigate();
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

  const handleDeleteListing = async () => {
    const answer = window.confirm("Are you sure you want to delete this listing?");

    if (answer) {
      const data = await deleteListing(listingId);

      if (!data.success) {
        return toast.error(data.message);
      }

      toast.success("Listing deleted!");
      navigate("/");
    }
  };

  useEffect(() => {
    const getListing = async () => {
      const data = await getListingById(listingId);
      setListing(data.listing);

      if (!data.success) {
        navigate("/pagenotfound");
      }
    };

    getListing();
  }, [listingId, navigate]);

  if (!listing || !listing.userId) {
    return <h1 className="text-center">Loading listing...</h1>;
  }

  return (
    <div className="product-page">
      <div className="product-container">
        <h1 className="product-title">{listing.title}</h1>
        <img className="product-image" src={listing.imageUrl} alt={listing.title} />
        <h2 className="product-username">@{listing.userId.username}</h2>
        <p className="product-description">{listing.description}</p>

        {user && user.id !== listing.userId._id && !listing.offersArray.some((offer) => offer.isAccepted) && (
          <button className="secondary-btn" onClick={handleSwapClick}>
            Swap
          </button>
        )}

        {user && user.id === listing.userId._id && (
          <button className="secondary-btn delete" onClick={handleDeleteListing}>
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
          <>
            <p className="offer-header">Offers</p>
            <div className="offer-card-container">
              {listing.offersArray.map((offer) => (
                <OfferCard
                  key={offer._id}
                  offerId={offer._id}
                  offer={offer.offerListingId}
                  isAccepted={offer.isAccepted}
                  user={user ? user.id : null}
                  listingUser={listing.userId._id}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="offer-header">Offers</p>
            <div className="offer-card-container">
              <h3 style={{ textAlign: "center" }}>No offers yet</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
