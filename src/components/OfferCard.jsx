import "../styles/OfferCard.css";
import { Check, X } from "lucide-react";

const OfferCard = ({ type }) => {
  return (
    <div className="offer-card">
      <img
        className="offer-image"
        src="https://images.pexels.com/photos/2263822/pexels-photo-2263822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Offer Image"
      />
      <div className="offer-details">
        <p className="offer-title">Product Title</p>
        {type != "swap" && <p className="offer-username">@username</p>}
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
