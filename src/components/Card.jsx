import { Link } from "react-router-dom";
import "../styles/Card.css";
import PropTypes from "prop-types";
import "../styles/Card.css";

const Card = ({ title, username, imageUrl, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-username">@{username}</p>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
