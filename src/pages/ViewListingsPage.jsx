import "../styles/ViewListingsPage.css";
import React from "react";
import Card from "../components/Card";

export default function ViewListingsPage() {
  const cardData = [
    {
      title: "Guitar",
      imageUrl:
        "https://images.pexels.com/photos/2156327/pexels-photo-2156327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Smart Watch",
      imageUrl:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="view-listings-page">
      <h1 className="home-title">My Listings</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
}
