import "../styles/OfferCard.css";
import PropTypes from "prop-types";
import { Check, X } from "lucide-react";
import { createSwap } from "../utils/offerFetch";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const OfferCard = ({ type, swapListing, offer, wantedId, isAccepted, user, listingUser, closeModal }) => {
  const navigate = useNavigate();
  const handleSwap = async (offerId) => {
    if (type !== "swap") return;

    const data = await createSwap(wantedId, offerId);

    if (!data.success) {
      return toast.error(data.message);
    }

    toast.success("Swap offer sent!");
    closeModal();
  };

  const handleClick = () => {
    if (type === "swap") {
      handleSwap(swapListing._id);
    } else {
      navigate(`/product/${offer._id}`);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`${isAccepted ? "offer-card-accepted" : "offer-card"} ${
          type === "swap" ? "offer-card-swap" : "offer-card"
        }`}
      >
        <img
          className="offer-image"
          src={type === "swap" ? swapListing.imageUrl : offer.imageUrl}
          alt={type === "swap" ? swapListing.title : offer.title}
        />
        <div className="offer-details">
          <p className="offer-title">{type === "swap" ? swapListing.title : offer.title}</p>

          {type != "swap" && <p className="offer-username">@{offer.userId.username}</p>}
        </div>
        {type != "swap" && user === listingUser && (
          <div className="offer-buttons">
            <button className="accept-button">
              <X />
            </button>
            <button className="decline-button">
              <Check />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default OfferCard;

OfferCard.propTypes = {
  type: PropTypes.string,
  swapListing: PropTypes.object,
  offer: PropTypes.object,
  wantedId: PropTypes.string,
  isAccepted: PropTypes.bool,
  user: PropTypes.string,
  listingUser: PropTypes.string,
  closeModal: PropTypes.func,
};
