import "./App.css";
import React from "react";
import HotelCard from "./components/hotelCard";
import { getHotels } from "./actions/dnataActions";

function App() {
  React.useEffect(() => {
    async function fetchData() {
      let hotelsData = await getHotels();
      console.log(hotelsData);
    }

    fetchData();
  }, []);
  return <HotelCard />;
}

export default App;
