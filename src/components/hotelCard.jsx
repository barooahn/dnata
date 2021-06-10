import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { orange } from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
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
  userRating: {
    backgroundColor: "#419ed5",
    width: 50,
    color: "white",
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  priceButton: {
    backgroundColor: orange[500],
    padding: 10,
    borderRadius: 1,
    float: "right",
  },
}));

export default function HotelCard({
  image,
  title,
  hotelRating,
  description,
  userRating,
  included,
  totalPrice,
  perPersonPrice,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />

      <CardContent className={classes.cardContent}>
        <Typography variant="h5" color="textSecondary" component="p">
          <Box>{title}</Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Rating name="read-only" value={hotelRating} readOnly />

          <Box fontSize={16}>{description}</Box>

          <Box fontSize={20} className={classes.userRating}>
            {userRating}
          </Box>

          <Box fontStyle="italic">Price includes:</Box>
          {included.map((item, index) => (
            <Box>{item}</Box>
          ))}
        </Typography>
      </CardContent>
      <Grid className={classes.priceContainer} container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="p">
            <Box fontSize={10}>Total price from</Box>
            <Box color={orange} fontSize={22}>£{totalPrice}</Box>
            <Box fontSize={12}>(Per Person £{perPersonPrice})</Box>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
            className={classes.priceButton}
            variant="contained"
            color="primary">
            View More
          </Button>
        </Grid>
      </Grid>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
