import "../styles/AccountPage.css";
import "../styles/SignUpPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AccountPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAnyInputFilled = username || email || password;

  return (
    <div className="container">
      <div className="account-container">
        <div className="account-heading">
          <h1>Account</h1>
          <p>Change your account details below.</p>
        </div>
        <form id="account-form">
          <div className="input-container">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Change Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Change Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Change Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {isAnyInputFilled && (
            <button className="accept-changes-btn" type="submit">
              Accept Changes
            </button>
          )}

          <Link to="/view-listings" className="view-listings-btn">
            View Listings
          </Link>
          <button className="delete-account-btn" type="submit">
            Delete Account
          </button>
        </form>
      </div>
    </div>
  );
}
