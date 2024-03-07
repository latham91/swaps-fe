import "../styles/HomePage.css";
import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { userSession } from "../utils/authFetch";

import Card from "../components/Card";

export default function HomePage() {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const getSession = async () => {
      const data = await userSession();

      if (data.success) {
        setUser(data.user);
      }
    };

    getSession();
  }, [setUser]);

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
    <div className="home-page">
      <h1 className="home-title">Latest Swaps</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} username={card.username} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
}
