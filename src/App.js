import "./App.css";
import React from "react";
import HotelCard from "./components/hotelCard";
import { getHotels } from "./actions/dnataActions";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    <Grid container spacing={3}>
      {hotelResults.map((hotel, index) => (
        <Grid item xs={12} sm={6} lg={3} >
          <HotelCard
            key={hotel.id}
            image={hotel.image}
            title={hotel.title}
            hotelRating={hotel.hotelRating}
            description={hotel.description}
            userRating={hotel.userRating}
            included={hotel.included}
            totalPrice={hotel.totalPrice}
            perPersonPrice={hotel.perPersonPrice}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default App;
