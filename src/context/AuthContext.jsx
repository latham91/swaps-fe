import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { userDelete, userLogin, userLogout, userSession, userSignup, userUpdate } from "../utils/authFetch";
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
  ///////SIGNUP////////
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

  ///////LOGIN////////
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

      setUser(data.user);
      setCredentials({});
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
  ///////LOGOUT////////
  const handleLogout = async () => {
    try {
      setLoading(true);
      const data = await userLogout();

      if (!data.success) {
        setLoading(false);
        return setErrorMsg(data.message);
      }

      setUser(null);
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

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const data = await userUpdate(credentials);

      if (!data.success) {
        setLoading(false);
        return setErrorMsg(data.message);
      }

      setLoading(false);
      setUser(data.user);
      setCredentials({});
    } catch (error) {
      setLoading(false);
      return setErrorMsg(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      const data = await userDelete();

      if (!data.success) {
        setLoading(false);
        return setErrorMsg(data.message);
      }

      setLoading(false);
      setUser(null);
      navigate("/");
    } catch (error) {
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
        handleLogout,
        handleUpdate,
        handleDelete,
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
