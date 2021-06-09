export const getHotels = async () => {
  let response = await fetch("http://localhost:5000/hotels", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return response.json();
};
