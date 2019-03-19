import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../../images/pizzaplace.jpeg";
import { withStyles } from "@material-ui/core";

const styles = {
  card: {
    float: "center",
    width: "100%"
  },
  media: {
    height: 100
  }
};

export class DisplayJoints extends Component {
  handleClick = () => {
    this.props.history.push("/menudetails");
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("../../images/pizzaplace.jpeg")}
                imageStyle={styles.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cafe Mocking Bird
                </Typography>
                <Typography component="p">
                  <p>Location : Mayur Colony</p>
                  <p>USP : Pizza</p>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="secondary">
                Share
              </Button>
              <Button onClick={this.handleClick} size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("../../images/pizza2.jpg")}
                imageStyle={styles.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cafe Direwolf
                </Typography>
                <Typography component="p">
                  <p>Location : Mayur Colony</p>
                  <p>USP : Burger / Pizza</p>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="secondary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("../../images/pasta-spaghetti.jpg")}
                imageStyle={styles.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cafe Drogon
                </Typography>
                <Typography component="p">
                  <p>Location : Mayur Colony</p>
                  <p>USP : Pasta</p>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="secondary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <Card>
          <div>
            <p>Name : Cafe Ghost</p>
            <p>Location : Mayur Colony</p>
            <p>USP : Momos</p>
          </div>
        </Card>
        <Card>
          <div>
            <p>Name : The Momo Place</p>
            <p>Location : Mayur Colony</p>
            <p>USP : Momos</p>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(DisplayJoints);
