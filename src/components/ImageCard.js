import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,.5)",
    margin: "20px",
  },
  media: {
    height: "400px",
  },
  title: {
    fontFamily: "Righteous",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Righteous",

    fontSize: "1.1rem",
    color: "#ddd",
  },
});

export default function ImageCard({ place }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Zoom duration={500} delay={200}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {place.title}
          </Typography>
          <Typography
            className={classes.desc}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {place.description}
          </Typography>
        </CardContent>
      </Zoom>
    </Card>
  );
}
