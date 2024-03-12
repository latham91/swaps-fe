import "../styles/ViewListingsPage.css";
import { useState, useEffect, useContext } from "react";
import Card from "../components/Card";
import { AuthContext } from "../context/AuthContext";
import { getUsersListings } from "../utils/listingFetch";

export default function ViewListingsPage() {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const data = await getUsersListings(user.id);

      if (data.success) {
        setListings(data.listings);
      }
    };

    fetchListings();
  }, [setListings, user.id]);

  if (listings.length === 0) {
    return <h1 className="text-center">No listings found</h1>;
  }

  return (
    <div className="view-listings-page">
      <h1 className="home-title">My Listings</h1>
      <div className="card-container">
        {listings.map((listing) => {
          return (
            <Card
              key={listing._id}
              id={listing._id}
              title={listing.title}
              imageUrl={listing.imageUrl}
              username={listing.userId.username}
            />
          );
        })}
      </div>
    </div>
  );
}
