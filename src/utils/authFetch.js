const baseUrl = import.meta.env.PROD ? import.meta.env.VITE_APP_BASE_URL : "http://localhost:5001";

export const userSignup = async (credentials) => {
  try {
    const response = await fetch(`${baseUrl}/api/users/signup`, {
      method: "POST",
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
