const baseUrl = import.meta.env.PROD ? import.meta.env.VITE_APP_BASE_URL : "http://localhost:5001";

export const userSignup = async (credentials) => {
  try {
    const response = await fetch(`${baseUrl}/api/users/signup`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const userLogin = async (credentials) => {
  try {
    const response = await fetch(`${baseUrl}/api/users/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      credentials: "include",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const userLogout = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/users/logout`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export const userSession = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/users/session`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};
