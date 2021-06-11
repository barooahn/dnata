import "./App.css";
import React from "react";
import HotelCard from "./components/hotelCard";
import { getHotels } from "./actions/dnataActions";
import StackGrid from "react-stack-grid";
import Mobile from "./helpers/mobile";

function App() {
  const [hotelResults, sethotelResults] = React.useState([]);

  const cardWidth = Mobile() ? "98%" : 325;

  React.useEffect(() => {
    async function fetchData() {
      try {
        let hotelsData = await getHotels();
        sethotelResults(hotelsData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <StackGrid columnWidth={cardWidth} gutterWidth={10} gutterHeight={10}>
      {hotelResults.map((hotel, index) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </StackGrid>
  );
}

export default App;
