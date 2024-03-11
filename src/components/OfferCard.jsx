import "../styles/OfferCard.css";
import PropTypes from "prop-types";
import { Check, X } from "lucide-react";
import { createSwap } from "../utils/offerFetch";

const OfferCard = ({ type, swapListing, offer, wantedId }) => {
  console.log(swapListing);

  const handleSwap = async (offerId) => {
    const data = await createSwap(wantedId, offerId);

    if (data.success) {
      return console.log(data.newOffer);
    }

    console.log(data.error);
  };

  return (
    <div onClick={() => handleSwap(swapListing._id)} className="offer-card">
      <img
        className="offer-image"
        src={type === "swap" ? swapListing.imageUrl : offer.imageUrl}
        alt={type === "swap" ? swapListing.title : offer.title}
      />
      <div className="offer-details">
        <p className="offer-title">{type === "swap" ? swapListing.title : offer.title}</p>
        {type != "swap" && <p className="offer-username">@{offer.userId.username}</p>}
      </div>
      {type != "swap" && (
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
  );
};

export default OfferCard;

OfferCard.propTypes = {
  type: PropTypes.string,
  swapListing: PropTypes.object,
  offer: PropTypes.object,
  wantedId: PropTypes.string,
};
