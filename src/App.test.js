import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
// import Mobile from "./helpers/mobile";
import HotelCard from "./components/hotelCard";
// import { Functions } from "@material-ui/icons";

afterEach(() => {
  cleanup();
});

test("renders learn react link", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

// test("mobile to return true if window size less than 600px", () => {
//   // Change the viewport to 500px.
//   // const JSDOM = require("jsdom").JSDOM;
//   // const jsdom = new JSDOM("<!DOCTYPE html><html>...");
//   // Object.defineProperty(jsdom.window.HTMLHtmlElement.prototype, "clientWidth", {
//   //   value: 700,
//   // });

//   Object.defineProperty(window, "innerWidth", {
//     writable: true,
//     configurable: true,
//     value: 700,
//   });

//   // Trigger the window resize event.
//   global.dispatchEvent(new Event("resize"));

//   //expect(window.innerWidth).toBe(150);
//   // Run your assertion.
//   expect(Mobile()).toEqual(true);
// });

// test("fetched data should contain hotel data", () => {
//   expect.assertions(1);
//   return Functions.fetch;
// });

test("should render image", () => {
  const hotel = {
    id: 1,
    image:
      "https://v2umbapi.travelbag.co.uk/media/on2plo45/sgsinhtl043-pan-pacific-singapore-exterior.jpg?mode=crop&center=0.255,0.495&quality=80&width=384&height=256",
    title: "Pan Pacific Singapore",
    hotelRating: 5,
    description: "City center, Singapore",
    userRating: 9.8,
    reviews: 97,
    included: ["Breakfast", "Lunch", "Dinner"],
    totalPrice: 6800,
    perPersonPrice: 3400,
  };

  render(<HotelCard hotel={hotel} />);
  const hotelImage = screen.getByTestId("image-1");
  expect(hotelImage).toBeInTheDocument();
  expect(hotelImage.props().src).toEqual(
    "https://v2umbapi.travelbag.co.uk/media/on2plo45/sgsinhtl043-pan-pacific-singapore-exterior.jpg?mode=crop&center=0.255,0.495&quality=80&width=384&height=256"
  );
});

test("should render title", () => {
  const hotel = {
    id: 1,
    image:
      "https://v2umbapi.travelbag.co.uk/media/on2plo45/sgsinhtl043-pan-pacific-singapore-exterior.jpg?mode=crop&center=0.255,0.495&quality=80&width=384&height=256",
    title: "Pan Pacific Singapore",
    hotelRating: 5,
    description: "City center, Singapore",
    userRating: 9.8,
    reviews: 97,
    included: ["Breakfast", "Lunch", "Dinner"],
    totalPrice: 6800,
    perPersonPrice: 3400,
  };

  render(<HotelCard hotel={hotel} />);
  const hotelImage = screen.getByTestId("title-1");
  expect(hotelImage).toBeInTheDocument();
  expect(hotelImage).toHaveTextContent("Pan Pacific Singapore");
});

test("should render hotelRating", () => {
  const hotel = {
    id: 1,
    image:
      "https://v2umbapi.travelbag.co.uk/media/on2plo45/sgsinhtl043-pan-pacific-singapore-exterior.jpg?mode=crop&center=0.255,0.495&quality=80&width=384&height=256",
    title: "Pan Pacific Singapore",
    hotelRating: 5,
    description: "City center, Singapore",
    userRating: 9.8,
    reviews: 97,
    included: ["Breakfast", "Lunch", "Dinner"],
    totalPrice: 6800,
    perPersonPrice: 3400,
  };

  render(<HotelCard hotel={hotel} />);
  const hotelRating = screen.getByTestId("hotelRating-1");
  expect(hotelRating).toBeInTheDocument();
  // expect(hotelRating.value).toBe(5);
  expect(wrapper.find(hotelRating).prop("value")).toBe(5);
});
