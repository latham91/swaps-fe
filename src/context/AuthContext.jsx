import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { userLogin, userSignup } from "../utils/authFetch";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();

  // Global state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [credentials, setCredentials] = useState({});

  // Functions
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = await userSignup(credentials);

      if (!data.success) {
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);

        setLoading(false);
        return setErrorMsg(data.message);
      }

      setCredentials({});
      setLoading(false);

      navigate("/login");
    } catch (error) {
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);

      setLoading(false);
      return setErrorMsg(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = await userLogin(credentials);

      if (!data.success) {
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);

        setLoading(false);
        return setErrorMsg(data.message);
      }

      setCredentials({});
      setUser(data.user);
      setLoading(false);

      navigate("/");
    } catch (error) {
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);

      setLoading(false);
      return setErrorMsg(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        errorMsg,
        setErrorMsg,
        credentials,
        setCredentials,
        handleSignup,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
