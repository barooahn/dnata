import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { orange } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Mood, Restaurant } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f8f8f8",
    borderRadius: 1,
  },
  cardContent: {
    backgroundColor: "white",
  },
  priceContainer: {
    padding: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  userReviewContainer: {
    borderBottom: "1px solid rgb(212, 212, 212)",
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 15,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  userRating: {
    backgroundColor: "#419ed5",
    width: 35,
    color: "white",
    padding: 5,
    textAlign: "center",
  },
  emoji: {
    color: "#419ed5",
    paddingLeft: 5,
  },
  reviews: {
    color: "#419ed5",
    paddingLeft: 5,
  },
  includesContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 15,
  },
  includesIcon: {
    paddingRight: 20,
  },
  priceButton: {
    backgroundColor: orange[500],
    padding: 10,
    borderRadius: 1,
    float: "right",
  },
}));

export default function HotelCard({ hotel }) {
  const classes = useStyles();

  const handelHotelPage = (hotel) => {
    console.log(`redirect to hotel page with ${JSON.stringify(hotel)}`);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={hotel.image || "../image-not-found.jpg"}
        title={hotel.title}
      />

      <CardContent className={classes.cardContent}>
        <Typography variant="h6" color="textSecondary" component="h5">
          <Box color={blue[700]}>{hotel.title || "Title here"}</Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <Rating name="read-only" value={hotel.hotelRating || 0} readOnly />

          <Box fontSize={16}>{hotel.description}</Box>
          <div className={classes.userReviewContainer}>
            <Box fontSize={20} className={classes.userRating}>
              {hotel.userRating || 0}
            </Box>
            <Mood className={classes.emoji} fontSize="large" />
            <Box fontSize={14} className={classes.reviews}>
              (Based on {hotel.reviews || 0} reviews)
            </Box>
          </div>

          <Box fontSize={15} fontStyle="italic">
            Price includes:
          </Box>
          {hotel.included.map((item, index) => (
            <div key={index} className={classes.includesContainer}>
              <Restaurant className={classes.includesIcon} />
              <span className={classes.includesText}>
                {item || "item here"}
              </span>
            </div>
          ))}
        </Typography>
      </CardContent>
      <Grid className={classes.priceContainer} container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="div">
            <Box fontSize={12}>Total price from</Box>
            <Box color={orange[500]} fontSize={22} fontWeight={700}>
              £{hotel.totalPrice || 0}
            </Box>
            <Box fontSize={12}>
              (Per Person <b>£{hotel.perPersonPrice || 0}</b>)
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
            className={classes.priceButton}
            variant="contained"
            color="primary"
            onClick={() => handelHotelPage(hotel)}>
            View More
          </Button>
        </Grid>
      </Grid>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
