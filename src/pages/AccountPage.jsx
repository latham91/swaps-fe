import "../styles/AccountPage.css";
import "../styles/SignUpPage.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function AccountPage() {
  const { credentials, setCredentials, handleUpdate, errorMsg, loading } = useContext(AuthContext);

  let isAnyInputFilled = Object.values(credentials).some((value) => value !== "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.username === "" && credentials.email === "" && credentials.password === "") {
      return toast.error("You must fill in all fields to update your account.");
    }

    if (errorMsg) {
      return toast.error(errorMsg);
    }

    handleUpdate();
    toast.success("Account updated!");
  };

  // const deleteAccount = () => {
  //   if (window.confirm("Are you sure you want to delete your account?")) {
  //     handleDelete();
  //   }
  // };
  return (
    <div className="container">
      <div className="account-container">
        <div className="account-heading">
          <h1>Account</h1>
          <p>Change your account details below.</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} id="account-form">
          <div className="input-container">
            <input
              type="text"
              name="username"
              id="username"
              disabled={loading}
              placeholder="Change Username"
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
          </div>

          <div className="input-container">
            <input
              type="email"
              name="email"
              id="email"
              disabled={loading}
              placeholder="Change Email"
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              name="password"
              id="password"
              disabled={loading}
              placeholder="Change Password"
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>

          {isAnyInputFilled && (
            <button className="accept-changes-btn" type="submit" disabled={loading}>
              {loading ? "Updating..." : "Accept Changes"}
            </button>
          )}
        </form>
        <p className="text-center">
          <strong>OR</strong>
        </p>
        <Link to="/view-listings" className="primary-btn">
          View My Listings
        </Link>
        {/* <button onClick={deleteAccount} className="primary-btn delete" type="submit">
          Delete Account
        </button> */}
      </div>
    </div>
  );
}
