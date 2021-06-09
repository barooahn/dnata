import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
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
      <CardHeader />
      <CardContent>
        <Typography variant="h5" color="textSecondary" component="p">
          {title}
        </Typography>
        <Rating name="read-only" value={hotelRating} readOnly />
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
