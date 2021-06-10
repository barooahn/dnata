import "./App.css";
import React from "react";
import HotelCard from "./components/hotelCard";
import { getHotels } from "./actions/dnataActions";
import StackGrid from "react-stack-grid";
import Mobile from "./helpers/mobile";

function App() {
  // const [hotel, setHotel] = React.useState({
  //   image: "./public/image-not-found.jpg",
  //   title: "hotel",
  //   hotelRating: 0,
  //   description: "Description here",
  //   userRating: 0,
  //   included: "Nothing",
  //   totalPrice: 0,
  //   perPersonPrice: 0,
  // });

  // const [image, setImage] = React.useState("./public/image-not-found.jpg");
  // const [title, setTitle] = React.useState("hotel");
  // const [hotelRating, setHotelRatings] = React.useState(0);
  // const [description, setDescription] = React.useState("Description here");
  // const [userRating, setUserRating] = React.useState(0);
  // const [included, setIncluded] = React.useState("Nothing");
  // const [totalPrice, setTotalPrice] = React.useState(0);
  // const [perPersonPrice, setPersonPrice] = React.useState(0);

  const [hotelResults, sethotelResults] = React.useState([]);

  const cardWidth = Mobile() ? "98%" : 325;

  console.log(cardWidth);

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
        <HotelCard
          key={hotel.id}
          image={hotel.image}
          title={hotel.title}
          hotelRating={hotel.hotelRating}
          description={hotel.description}
          userRating={hotel.userRating}
          reviews={hotel.reviews}
          included={hotel.included}
          totalPrice={hotel.totalPrice}
          perPersonPrice={hotel.perPersonPrice}
        />
      ))}
    </StackGrid>
  );
}

export default App;
