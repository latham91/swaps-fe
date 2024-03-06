import React from "react";
import Card from "../components/Card";
import "../styles/Homepage.css";

export default function Homepage() {
  const cardData = [
    {
      title: "Golf Clubs",
      username: "@aaron",
      imageUrl:
        "https://images.pexels.com/photos/6572954/pexels-photo-6572954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Gameboy Color",
      username: "@andrewc",
      imageUrl:
        "https://images.pexels.com/photos/2263822/pexels-photo-2263822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Books",
      username: "@leandro",
      imageUrl:
        "https://images.pexels.com/photos/990432/pexels-photo-990432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Bird Feeder",
      username: "@andrewm",
      imageUrl:
        "https://images.pexels.com/photos/14724593/pexels-photo-14724593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="homepage">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          username={card.username}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}
