import "../styles/HomePage.css";
import { useEffect, useState } from "react";
import { getAllListings } from "../utils/listingFetch";

import Card from "../components/Card";

export default function HomePage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const data = await getAllListings();

      if (data.success) {
        setListings(data.listings);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="home-page">
      <h1 className="home-title">Latest Swaps</h1>
      {listings.length === 0 ? (
        <h2>No swaps founds, be the first to create one.</h2>
      ) : (
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
      )}
    </div>
  );
}
