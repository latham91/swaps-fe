const baseUrl = import.meta.env.PROD ? import.meta.env.VITE_APP_BASE_URL : "http://localhost:5001";

export const createSwap = async (wantedId, offeredId) => {
  try {
    const response = await fetch(`${baseUrl}/api/offers/swap/${wantedId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ offeredId }),
      credentials: "include",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};
