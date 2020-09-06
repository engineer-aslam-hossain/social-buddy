import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: "20px 40px",
    padding: "40px",
    justifyContent: "between",
  },
  details: {
    display: "flex",
    flex: 1,
  },
  cover: {
    width: "150px",
    height: "150px",
    border: "3px solid #ffba08",
    borderRadius: "50%",
  },
}));
const Comment = props => {
  const classes = useStyles();
  const { name, email, body, postId } = props.comment;

  const [RandomUser, SetRandomUser] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => SetRandomUser(data.results[0].picture.large));
  }, []);

  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant='subtitle1' color='textSecondary'>
              Post ID: {postId}
            </Typography>
            <Typography component='h5' variant='h5' gutterBottom>
              Comment Title : ☑️ {name}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              Comment Body : ☑️ {body}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={RandomUser}
          title='Live from space album cover'
        />
      </Card>
    </div>
  );
};

export default Comment;
